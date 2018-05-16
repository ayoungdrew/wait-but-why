import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    // This parses the event's current date and assigns substrings to variables
    // to eventually be persisted when user saves edits.
    // Necessary as app only requires user to input month and year
    this.set('eventYear', this.get('model').get('date').substring(0, 4))
    this.set('eventMonth', this.get('model').get('date').substring(5, 7))
  },

  // Invokes when component is removed from the DOM.
  willDestroyElement () {
    // If data-bound elements have been changed but not persisted, the dirty
    // attributes will be rolled back.
    this._super(...arguments)
    const model = this.get('model')
    if (model.get('hasDirtyAttributes')) {
      this.get('model').rollbackAttributes()
      this.toast.info('Changes discarded', 'Status', { positionClass: 'toast-bottom-right' })
    }
  },

  // For assigning the right color styling to events - see below
  classNameBindings: ['reasonClass'],

  // This assigns the appropriate CSS classes, changing the colors
  // based on the event record's reason
  reasonClass: function () {
    const modelReason = this.get('model.reason')
    if (modelReason === 'It was something I wanted to do') {
      return 'event-wanted'
    } else if (modelReason === 'I felt like I had to') {
      return 'event-had-to'
    } else if (modelReason === 'I had no control over it') {
      return 'event-no-control'
    }
  }.property('event.reasonClass'),

  actions: {
    setMonthSelection (selected) {
      this.set('eventMonth', selected)
    },
    setYearSelection (selected) {
      this.set('eventYear', selected)
    },
    setReasonSelection (selected) {
      this.set('selectedReason', selected)
    },
    saveSingleEvent (event) {
      const compiledDate = `${this.get('eventYear')}${this.get('eventMonth')}01`
      event.set('date', compiledDate)
      if (this.get('selectedReason')) {
        event.reason = this.get('selectedReason')
      }
      this.sendAction('save', this.get('model'))
    },
    cancelChanges () {
      this.get('model').rollbackAttributes()
      this.toggleProperty('isEditing')
      this.toast.info('Changes discarded', 'Status', { positionClass: 'toast-bottom-right' })
      this.sendAction('backToEvents', this.get('model'))
    }
  }
})

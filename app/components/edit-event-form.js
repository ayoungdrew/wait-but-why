import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.get('model').rollbackAttributes()
    this.set('eventYear', this.get('model').get('date').substring(0, 4))
    this.set('eventMonth', this.get('model').get('date').substring(5, 7))
  },

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
      const thisComment = this.get('model')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
      this.sendAction('backToEvents', this.get('model'))
    }
  }
})

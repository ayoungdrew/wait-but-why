import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  userId: alias('auth.credentials.id'),
  isAuthenticated: alias('auth.isAuthenticated'),

  // // Invokes when component is removed from the DOM.
  // willDestroyElement () {
  //     // If data-bound elements have been changed but not persisted, the dirty
  //     // attributes will be rolled back.
  //     this._super(...arguments)
  //     const model = this.get('model')
  //     if (model.get('hasDirtyAttributes')) {
  //       this.get('model').rollbackAttributes()
  //       this.toast.info('Changes discarded', 'Status')
  //     }
  //   },

  // For assigning the right color styling to events - see below
  classNameBindings: ['reasonClass'],

  // This assigns the appropriate CSS classes, changing the colors
  // based on the event record's reason
  reasonClass: function () {
    const modelReason = this.get('event.reason')
    if (modelReason === 'It was something I wanted to do') {
      return 'event-wanted'
    } else if (modelReason === 'I felt like I had to') {
      return 'event-had-to'
    } else if (modelReason === 'I had no control over it') {
      return 'event-no-control'
    }
  }.property('event.reasonClass'),

  actions: {
    deleteEvent () {
      this.sendAction('deleteSingleEvent', this.get('event'))
    },
    deleteSingleComment (commentObj) {
      this.sendAction('deleteSingleComment', commentObj)
    },
    addSingleComment (commentObj) {
      this.sendAction('addSingleComment', commentObj)
    },
    updateComment (commentObj) {
      this.sendAction('updateComment', commentObj)
    },
    refresh () {
      this.sendAction('refresh')
    }
  }
})

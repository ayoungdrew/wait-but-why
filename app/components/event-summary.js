import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  userId: alias('auth.credentials.id'),
  isAuthenticated: alias('auth.isAuthenticated'),

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

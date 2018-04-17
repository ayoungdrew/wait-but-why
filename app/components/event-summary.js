import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  userId: alias('auth.credentials.id'),
  isAuthenticated: alias('auth.isAuthenticated'),

  actions: {
    deleteEvent (event) {
      console.log(event)
      console.log('hey')
      this.sendAction('deleteSingleEvent', this.get('event'))
    },
    deleteComment (comment) {
      console.log(comment)
      console.log('comment destroy!!!')
      this.sendAction('deleteSingleComment', this.get('comment'))
    }
  }
});

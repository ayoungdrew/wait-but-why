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
      // console.log('made it do event-sum', event)
      this.sendAction('deleteSingleEvent', this.get('event'))
    },
    deleteSingleComment (comment) {
      // console.log('get rid of', comment)
      this.sendAction('deleteSingleComment', comment)
    },
    addSingleComment (commentPojo) {
      // console.log('made it to event-sum js')
      // console.log('pojo is', commentPojo)
      this.sendAction('addSingleComment', commentPojo)
  },
    updateComment (commentPojo) {
      // console.log('made it to event-sum js')
      // console.log('pojo is', commentPojo)
      this.sendAction('updateComment', commentPojo)
    },
    refresh () {
      // console.log('gogo!')
      this.sendAction('refresh')
  }
  }
});

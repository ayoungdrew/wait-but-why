import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model (params) {
    return this.get('store').findRecord('event', params.event_id)
  },

  actions: {
    destroyEvent (event) {
      event.destroyRecord()
      .then(() => this.toast.success('Deleted event!', '', { positionClass: 'toast-bottom-right' }))
      .then(() => this.transitionTo('user', this.get('auth.credentials.id')))
      .catch((error) => { this.toast.error('Error is', error, { positionClass: 'toast-bottom-right' }) })
    },
    destroyComment (commentObj) {
      commentObj.destroyRecord()
      .then(() => { this.toast.success('Deleted comment!', '', { positionClass: 'toast-bottom-right' }) })
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error D:', error, { positionClass: 'toast-bottom-right' }) })
    },
    createComment (commentObj) {
      const comment = this.get('store').createRecord('comment', commentObj)
      return comment.save()
      .then(() => { this.toast.success('Comment posted!', '', { positionClass: 'toast-bottom-right' }) })
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Uh oh!', error, { positionClass: 'toast-bottom-right' }) })
    },
    updateComment (args) {
      const comment = args
      comment.save()
    .then(() => { this.toast.success('Comment edited :D', '', { positionClass: 'toast-bottom-right' }) })
    .catch((error) => { this.toast.error('Oh noes!!', error, { positionClass: 'toast-bottom-right' }) })
    }
  }
})

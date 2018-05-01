import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('event', params.event_id)
  },

  actions: {
    destroyEvent (event) {
      event.destroyRecord()
      .then(() => this.toast.success('Deleted event!', '', { positionClass: 'toast-bottom-right' }) )
      .then(() => this.transitionTo('events'))
      .catch((error) => { this.toast.error('Error is', error, { positionClass: 'toast-bottom-right' }) })
    },
    destroyComment (commentObj) {
      // console.log(commentObj)
      // console.log('hi', commentObj.id)
      commentObj.destroyRecord()
      // this.get('store').findRecord('comment', commentObj.get('id'))
      // .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Deleted comment!', '', { positionClass: 'toast-bottom-right' })})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error D:', error, { positionClass: 'toast-bottom-right' }) })
    },
    createComment (commentObj) {
      // console.log('made it to event js')
      // console.log('obj is', commentObj)
      const comment = this.get('store').createRecord('comment', commentObj)
      return comment.save()
      .then(() => { this.toast.success('Comment posted!', '', { positionClass: 'toast-bottom-right' })})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Uh oh!', error, { positionClass: 'toast-bottom-right' }) })
  },
  updateComment (args) {
    // console.log('last stop', args)
    const comment = args
    comment.save()
    .then(() => { this.toast.success('Comment edited :D', '', { positionClass: 'toast-bottom-right' })})
    .catch((error) => { this.toast.error('Oh noes!!', error, { positionClass: 'toast-bottom-right' }) })
  },
  }
});

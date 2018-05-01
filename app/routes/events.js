import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),

  model () {
    const currentUserId = this.get('auth.credentials.id')
    return this.get('store').findAll('event')
    .then(results => results.filter((x) => {
      return x.get('user_id') === currentUserId
    }))
     .then(events => events.sortBy('date').reverse())
  },
  actions: {
    createEvent (event) {
      // console.log('let us create', event)
      this.get('store').createRecord('event', event)
        .save()
        .then(() => { this.toast.success('Done!','', { positionClass: 'toast-bottom-right' })})
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Something went wrong! :(', error, { positionClass: 'toast-bottom-right' }) })
    },
    destroyEvent (event) {
      event.destroyRecord()
      .then(() => { this.toast.success('Done!', '', { positionClass: 'toast-bottom-right' })})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Darn it!', error, { positionClass: 'toast-bottom-right' }) })
    },
    destroyComment (commentObj) {
      this.get('store').findRecord('comment', commentObj.get('id'))
      .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Deleted!', '', { positionClass: 'toast-bottom-right' })})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Something went wrong', error, { positionClass: 'toast-bottom-right' }) })
    },
    createComment (commentPojo) {
      const comment = this.get('store').createRecord('comment', commentPojo)
      return comment.save()
      .then(() => { this.toast.success('Created comment!', '', { positionClass: 'toast-bottom-right' })})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Something went wrong', error, { positionClass: 'toast-bottom-right' }) })
    },
    updateComment (editedComment) {
      const comment = editedComment
      comment.save()
      .then(() => { this.toast.success('Edited comment :)', '', { positionClass: 'toast-bottom-right' })})
      .catch((error) => { this.toast.error('Something went wrong', error, { positionClass: 'toast-bottom-right' }) })
    },
    refresh () {
      this.refresh()
    }
  }
})

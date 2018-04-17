import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import { alias } from '@ember/object/computed'

export default Route.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  model () {
    console.log('hmm', this.get('auth.credentials.id'))
    const currentUserId = this.get('auth.credentials.id')
    return this.get('store').findAll('event')
    .then(results => results.filter((x) => {
      return x.get('user_id') === currentUserId
    }))
     .then(events => events.sortBy('date').reverse())
  },
  actions: {
    createEvent (event) {
      console.log('let us create', event)
      this.get('store').createRecord('event', event)
        .save()
        .then(() => { this.toast.success('Done!')})
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Error is', error) })
    },
    destroyEvent (event) {
      console.log('kill itttt', event)
      event.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    },
    destroyComment (commentObj) {
      console.log(commentObj)
      console.log('hi', commentObj.id)
      commentObj.destroyRecord()
      this.get('store').findRecord('comment', commentObj.get('id'))
      .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    },
    createComment (commentPojo) {
      console.log('new obj is', commentPojo)
      const comment = this.get('store').createRecord('comment', commentPojo)
      return comment.save()
      .then(() => this.refresh())
    }
  }
})

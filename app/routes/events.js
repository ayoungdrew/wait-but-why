import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Route.extend({
  tagName: 'ul',
  sortedEvents: Ember.computed.sort('event', 'sortDefinition'),
  sortDefinition: ['date'],
  auth: service(),
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
    createComment (event) {
      console.log('comment?', event)
      event.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
})

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Route.extend({
  tagName: 'ul',
  sortedEpisodes: Ember.computed.sort('episode', 'sortDefinition'),
  sortDefinition: ['date'],
  auth: service(),
  model () {
    console.log('hmm', this.get('auth.credentials.id'))
    const currentUserId = this.get('auth.credentials.id')
    return this.get('store').findAll('episode')
    .then(results => results.filter((x) => {
      return x.get('user_id') === currentUserId
    }))
     .then(episodes => episodes.sortBy('date').reverse())
  },
  actions: {
    createEpisode (episode) {
      console.log('let us create', episode)
      this.get('store').createRecord('episode', episode)
        .save()
        .then(() => { this.toast.success('Done!')})
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Error is', error) })
    },
    destroyEpisode (episode) {
      console.log('kill itttt', episode)
      episode.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
})

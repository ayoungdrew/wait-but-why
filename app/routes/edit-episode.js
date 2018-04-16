import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('episode', params.episode_id)
  },
  actions: {
    saveEpisode (episode) {
      console.log('hi! trying to save', episode)
      episode.save()
      .then(() => { this.toast.success('Edits saved!') })
      .then(() => this.transitionTo('episode', episode.id))
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
})

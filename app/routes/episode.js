import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
  // go get necessary list
    console.log('logged', this.get('store').findRecord('episode', params.episode_id))
    console.log('params is', params)
    return this.get('store').findRecord('episode', params.episode_id)
  },
  actions: {
    deleteEpisode (episode) {
      console.log(episode)
      console.log('hey')
      episode.destroyRecord()
      .then(() => this.transitionTo('episodes'))
      // .catch(console.log('catch!'))
    }
  }
});

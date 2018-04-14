import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('episode')
  },
  actions: {
    createEpisode (episode) {
      console.log('hi! let us create', episode)
      this.get('store').createRecord('episode', episode)
        .save()
    },
    saveEpisode (episode) {
      console.log('id is', episode.id)
      console.log(episode)
      episode.save()
    },
    destroyEpisode (episode) {
      console.log('kill itttt')
      console.log(episode)
      episode.destroyRecord()
    }
  }
});

import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('episode')
  },
  actions: {
    addNewEpisode (episodePojo) {
      console.log('look', episodePojo)
      const episode = this.get('store').createRecord('episode', episodePojo)
      return episode.save()
    },
    saveEpisode (episode) {
      console.log('blah i\'m in exmples route file')
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

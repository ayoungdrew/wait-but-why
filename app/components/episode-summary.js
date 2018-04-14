import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteEpisode (episode) {
      console.log(episode)
      console.log('hey')
      episode.destroyRecord()
    }
  }
});

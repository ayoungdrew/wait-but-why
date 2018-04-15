import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteEpisode (episode) {
      console.log(episode)
      console.log('hey')
      episode.destroyRecord()
      .then(console.log('yay! deleted'))
      // .catch(console.log('failed to delete'))
    }
  }
});

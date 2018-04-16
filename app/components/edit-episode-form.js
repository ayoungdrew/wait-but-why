import Component from '@ember/component';

export default Component.extend({
  actions: {
    setSelection (selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    saveSingleEpisode (episode) {
      console.log('sending data', episode)
      episode.why = this.get('selectedOption')
      this.sendAction('save', this.get('model'))
    }
  }
});

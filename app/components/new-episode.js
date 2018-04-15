import Component from '@ember/component';

export default Component.extend({
  episode: {
    title: '',
    date: '',
    why: '',
    description: ''
  },

  actions: {
    setSelection: function (selected) {
     this.set('selectedOption', selected)
     console.log(this.get('selectedOption'))
   },
    newEpisode () {
      this.episode.why = this.get('selectedOption')
      this.sendAction('create', this.get('episode'))
    }
  }
});

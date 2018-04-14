import Component from '@ember/component';

export default Component.extend({
  episode: {
    title: 'test title',
    date: 20171230,
    why: '',
    description: 'test desc',
    user_id: 1
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

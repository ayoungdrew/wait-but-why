import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    // console.log('params is', params)
    return this.get('store').findRecord('episode', params.episode_id);
  },
  actions: {
    setSelection: function (selected) {
     this.set('selectedOption', selected)
     console.log(this.get('selectedOption'))
   },
    saveEpisode (episode) {
      console.log('hi! trying to save', episode)
      episode.why = this.get('selectedOption')
      episode.save()
      .then(() => { this.toast.success('Edits saved!')})
      .then(() => this.transitionTo('episode', episode.id))
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
});

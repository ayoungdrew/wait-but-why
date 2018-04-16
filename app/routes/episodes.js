import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model () {
    // console.log(this.get('store').queryRecord('user', { me: true }))
    return this.get('store').findAll('episode')
  },
  actions: {
    createEpisode (episode) {
      console.log('let us create', episode)
      this.get('store').createRecord('episode', episode)
        .save()
        .then(() => { this.toast.success('Done!')})
        .catch((error) => { this.toast.error('Error is', error) })
    },
    destroyEpisode (episode) {
      console.log('kill itttt', episode)
      episode.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
})

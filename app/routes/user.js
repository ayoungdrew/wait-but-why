import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findAll('episode')
    .then(results => results.filter((x) => {
      return x.get('user_id').toString() === params.user_id
    }))
  },
  actions: {
    destroyEpisode (episode) {
      console.log('kill itttt', episode)
      episode.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    }
  }
});

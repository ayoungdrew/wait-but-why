import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
  // go get necessary list
    console.log('params is', params)
    return this.get('store').findRecord('episode', params.episode_id)
  },
  actions: {}
});

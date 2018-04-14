import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findAll('episode')
    .then(results => results.filter((x) => {
      console.log('again, params is', params.user_id)
      return x.get('user_id') == params.user_id
    }))
  },
  actions: {
  }
});

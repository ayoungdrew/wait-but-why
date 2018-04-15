import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findAll('episode')
    .then(results => results.filter((x) => {
      // console.log(params.user_id)
      // console.log(x.get('user_id').toString())
      return x.get('user_id').toString() === params.user_id
    }))
  },
  actions: {
  }
});

import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
  // go get necessary list
    console.log('logged', this.get('store').findRecord('event', params.event_id))
    console.log('params is', params)
    return this.get('store').findRecord('event', params.event_id)
  },
  actions: {
    destroyEvent (event) {
      console.log(event)
      console.log('hey')
      event.destroyRecord()
      .then(() => this.transitionTo('events'))
      // .catch(console.log('catch!'))
    }
  }
});

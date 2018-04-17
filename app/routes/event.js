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
    },
    destroyComment (commentObj) {
      console.log(commentObj)
      console.log('hi', commentObj.id)
      commentObj.destroyRecord()
      this.get('store').findRecord('comment', commentObj.get('id'))
      .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    },
    createComment (commentObj) {
      console.log('made it to event js')
      console.log('obj is', commentObj)
      const comment = this.get('store').createRecord('comment', commentObj)
      return comment.save()
      .then(() => this.refresh())
  }
  }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  model (params) {
    console.log('params is', params)
    return this.get('store').findAll('event')
    .then(results => results.filter((x) => {
      return x.get('user_id').toString() === params.user_id
    }))
    .then(events => events.sortBy('date').reverse())
  },
  actions: {
    destroyEvent (event) {
      console.log('kill itttt', event)
      event.destroyRecord()
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    },
    createComment (commentPojo) {
      console.log('made it to eventsjs')
      console.log('pojo is', commentPojo)
      const comment = this.get('store').createRecord('comment', commentPojo)
      return comment.save()
      .then(() => this.refresh())
    }
  }
});

import Route from '@ember/routing/route'

export default Route.extend({

  model (params) {
    return this.get('store').findRecord('event', params.event_id)
  },
  actions: {
    saveEvent (event) {
      event.save()
      .then(() => this.toast.success('Edits saved!', '', { positionClass: 'toast-bottom-right' }))
      .then(() => this.transitionTo('event', event.id))
      .catch((error) => { this.toast.error('Oh noes!!', error, { positionClass: 'toast-bottom-right' }) })
    },
    backToEventsHome (event) {
      this.transitionTo('event', event.id)
    }
  }
})

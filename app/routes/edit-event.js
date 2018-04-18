import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('event', params.event_id)
  },
  actions: {
    saveEvent (event) {
      console.log('hi! trying to save', event)
      event.save()
      .then(() => { this.toast.success('Edits saved!') })
      .then(() => this.transitionTo('event', event.id))
      .catch((error) => { this.toast.error('Error is', error) })
    },
    cancelCommentChanges () {
      console.log('nahh')
      const thisComment = this.get('event')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
    },
    backToEventsHome (event) {
      console.log('kkk', event)
      this.transitionTo('event', event.id)
    }
  }
})

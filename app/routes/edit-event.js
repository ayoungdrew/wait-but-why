import { alias } from '@ember/object/computed'
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
  model (params) {
    return this.get('store').findRecord('event', params.event_id)
  },
  actions: {
    saveEvent (event) {
      // console.log('hi! trying to save', event)
      event.save()
      .then(() => this.toast.success('Edits saved!', '', { positionClass: 'toast-bottom-right' }) )
      .then(() => this.transitionTo('event', event.id))
      .catch((error) => { this.toast.error('Oh noes!!', error, { positionClass: 'toast-bottom-right' }) })
    },
    // cancelCommentChanges () {
    //   // console.log('nahhHH')
    //   const thisComment = this.get('event')
    //   thisComment.rollbackAttributes()
    //   this.toggleProperty('isEditing')
    // },
    backToEventsHome (event) {
      // console.log('kkk', event)
      this.transitionTo('event', event.id)
    }
  }
})

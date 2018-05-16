import Route from '@ember/routing/route'
import RSVP from 'rsvp'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  model () {
    return RSVP.hash({
      activeRelationships: this.get('store').findAll('relationship')
        .then(results => results.filter((x) => {
          return x.get('follower_id') === this.get('auth.credentials.id')
        })),
      passiveRelationships: this.get('store').findAll('relationship')
        .then(results => results.filter((x) => {
          return x.get('followed_id') === this.get('auth.credentials.id')
        }))
    })
  },
  actions: {
    createComment (commentPojo) {
      const comment = this.get('store').createRecord('comment', commentPojo)
      return comment.save()
      .then(() => { this.toast.success('Created comment!', '', { positionClass: 'toast-bottom-right' }) })
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Something went wrong', error, { positionClass: 'toast-bottom-right' }) })
    },
    updateComment (editedComment) {
      const comment = editedComment
      comment.save()
      .then(() => { this.toast.success('Edited comment :)', '', { positionClass: 'toast-bottom-right' }) })
      .catch((error) => { this.toast.error('Something went wrong', error, { positionClass: 'toast-bottom-right' }) })
    },
    refresh () {
      this.refresh()
    }
  }
})

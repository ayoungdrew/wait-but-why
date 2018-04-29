import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model (params) {
    return RSVP.hash({
      // return FIRST key-value 'posts' to load user's event posts
      posts: this.get('store').findAll('event')
        .then(results => results.filter((x) => {
          return x.get('user_id').toString() === params.user_id
        }))
        .then(events => events.sortBy('date').reverse()),
      // return SECOND key-value 'fellowUser' to load user's 'email'/username
      fellowUser: this.get('store').findRecord('user', params.user_id)
        .then((data) => data.get('email'))
    })
  },

  actions: {
    destroyEvent (event) {
      // End of action chain; destroys event post & comments
      event.destroyRecord()
        .then(() => { this.toast.success('Killed that event!', '', { positionClass: 'toast-bottom-right' }) })
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Error is', error, { positionClass: 'toast-bottom-right' }) })
    },
    // End of action chain; destroys individual comment
    destroyComment (commentObj) {
      this.get('store').findRecord('comment', commentObj.get('id'))
        .then((comment) => comment.destroyRecord())
        .then(() => { this.toast.success('Deleted!', '', { positionClass: 'toast-bottom-right' }) })
        .catch((error) => { this.toast.error('You broke it!', error, { positionClass: 'toast-bottom-right' }) })
    },
    // End of action chain; creates comment associated with event post
    createComment (commentPojo) {
      const comment = this.get('store').createRecord('comment', commentPojo)
      return comment.save()
        .then(() => { this.toast.success('Done!', '', { positionClass: 'toast-bottom-right' }) })
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Something wrong...', error, { positionClass: 'toast-bottom-right' }) })
    },
    // End of action chain; updates comment
    updateComment (editedComment) {
      const comment = editedComment
      comment.save()
        .then(() => { this.toast.success('Update great success!', '', { positionClass: 'toast-bottom-right' }) })
        .catch((error) => { this.toast.error('Something wrong...', error, { positionClass: 'toast-bottom-right' }) })
    }
  }
})

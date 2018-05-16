import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),

  model (params) {
    return RSVP.hash({
      // return FIRST key-value 'posts' to load user's event posts
      posts: this.get('store').findAll('event')
      .then(results => results.filter((x) => {
        return x.get('user_id').toString() === params.user_id
      }))
        .then(events => events.sortBy('date').reverse()),
      currentUserId: this.get('auth.credentials.id'),
      fellowUser: this.get('store').findRecord('user', params.user_id),
      fellowUserId: this.get('store').findRecord('user', params.user_id)
        .then((data) => +data.get('id')),
      activeRelationships: this.get('store').findAll('relationship')
        .then(results => results.filter((x) => {
          return x.get('follower_id') === +params.user_id
        })),
      passiveRelationships: this.get('store').findAll('relationship')
        .then(results => results.filter((x) => {
          return x.get('followed_id') === +params.user_id
        })),
        // This finds the relationship object that represents the signed in
        // user following the current viewed user if it exists
      thisRelationship: this.get('store').findAll('relationship')
          .then(results => results.find((x) => {
            return x.get('followed_id') === +params.user_id && x.get('follower_id') === this.get('auth.credentials.id')
          }))
    })
  },

  actions: {
    createEvent (eventObj) {
      this.get('store').createRecord('event', eventObj)
        .save()
        .then(() => { this.toast.success('Done!', '', { positionClass: 'toast-bottom-right' }) })
        .then(() => this.refresh())
        .catch((error) => { this.toast.error('Something went wrong! :(', error, { positionClass: 'toast-bottom-right' }) })
    },
    destroyEvent (eventObj) {
      eventObj.destroyRecord()
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
    },
    createRelationship (friendId) {
      // friendId is the one who current user is trying to follow
      console.log(this.get('auth.credentials.id').toString())
      const newRelObj = {}
      newRelObj.follower_id = this.get('auth.credentials.id')
      newRelObj.followed_id = +friendId
      const relationship = this.get('store').createRecord('relationship', newRelObj)
      if (newRelObj.followed_id !== this.get('auth.credentials.id')) {
        return relationship.save()
        .then(() => this.refresh())
        .then(() => { this.toast.success('Following!', '', { positionClass: 'toast-bottom-right' }) })
      }
    },
    destroyRelationship (relationshipId) {
      this.get('store').findRecord('relationship', relationshipId, {reload: true})
        .then((data) => data.destroyRecord())
        .then(() => this.refresh())
        .then(() => { this.toast.success('Unfollowed...', '', { positionClass: 'toast-bottom-right' }) })
    },
    destroyThisRelationship (relationshipObj) {
      const target = relationshipObj
      target.destroyRecord()
        .then(() => this.refresh())
        .then(() => { this.toast.success('Unfollowed...', '', { positionClass: 'toast-bottom-right' }) })
    }
  }
})

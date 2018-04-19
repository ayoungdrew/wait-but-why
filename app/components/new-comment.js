import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),

  didInsertElement () {
    this.set('newCommentObj', {
      body: ''
    })
  },

  actions: {
    destroyComment (commentObj) {
      console.log('hi', commentObj)
      commentObj.destroyRecord()
      this.get('store').findRecord('comment', commentObj.get('id'))
      .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Done!')})
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error) })
    },
    newComment (event) {
      console.log('logging', event)
      this.set('newCommentObj.event', event)
      this.sendAction('addComment', this.get('newCommentObj'))
      this.set('newCommentObj', {})
    }
  }
})

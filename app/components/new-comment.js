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
      // console.log('hi', commentObj)
      commentObj.destroyRecord()
      this.get('store').findRecord('comment', commentObj.get('id'))
      .then(comment => comment.destroyRecord())
      .then(() => { this.toast.success('Done for!', '', { positionClass: 'toast-bottom-right' }) })
      .then(() => this.refresh())
      .catch((error) => { this.toast.error('Error is', error, { positionClass: 'toast-bottom-right' }) })
    },
    newComment (event) {
      // console.log('logging', event)
      this.set('newCommentObj.event', event)
      // console.log('logging', this.get('newCommentObj.body').length)
      if (this.get('newCommentObj.body').length > 0) {
        this.sendAction('addComment', this.get('newCommentObj'))
        this.set('newCommentObj', {})
    } else {
        this.toast.error('Are you gonna write something?', '', { positionClass: 'toast-bottom-right' })
      }
    }
  }
})

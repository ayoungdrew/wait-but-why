import Component from '@ember/component';

export default Component.extend({
  didInsertElement () {
    this.set('newCommentObj', {
      body: 'hello'
    })
  },

  actions: {
    newComment (event) {
      console.log('logging', event)
      this.set('newCommentObj.event', event)
      this.sendAction('addComment', this.get('newCommentObj'))
    }
  }
})

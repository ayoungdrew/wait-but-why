import Component from '@ember/component';

export default Component.extend({
  comment: {
      commenter: '',
      body: '',
      event_id: ''
  },

  actions: {
    newComment (comment) {
      console.log('logging', comment)
      this.sendAction('newComment', {
        commenter: 'Andrew',
        body: 'test comment',
        event_id: 19
      })
    }
  }
})

import Component from '@ember/component';

export default Component.extend({
  commentPojo: {
      body: 'wheee'
      // event_id: 19
  },

  actions: {
    newComment (args) {
      console.log('logging1', args)
      this.set('commentPojo.event_id', args)
      console.log('logging', this.get('commentPojo'))
      this.sendAction('addComment', this.get('commentPojo'))
    }
  }
})

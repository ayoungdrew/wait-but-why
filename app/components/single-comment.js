import Component from '@ember/component'

export default Component.extend({

  isEditing: false,
  actions: {
    // This is triggers the edit comment functionality
    toggleEditMode () {
      this.toggleProperty('isEditing')
    },
    deleteComment () {
      this.sendAction('deleteComment', this.get('comment'))
    },
    updateComment () {
      this.sendAction('updateComment', this.get('comment'))
      this.toggleProperty('isEditing')
    },
    cancelCommentChanges () {
      const thisComment = this.get('comment')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
    }
  }
})

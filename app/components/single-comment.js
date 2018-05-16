import Component from '@ember/component'

export default Component.extend({
  // Invokes when component is removed from the DOM.
  willDestroyElement () {
    const thisComment = this.get('comment')
    thisComment.rollbackAttributes()
  },

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
      this.get('comment').rollbackAttributes()
      this.toggleProperty('isEditing')
    }
  }
})

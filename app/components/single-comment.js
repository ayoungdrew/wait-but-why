import EmberObject, { computed } from '@ember/object';
import Component from '@ember/component';
import { oneWay } from "@ember/object/computed"

export default Component.extend({
  // doubleClick: function() {
  //   this.toggleProperty('isEditing');
  // },

  isEditing: false,
  actions: {
    toggleEditMode () {
      this.toggleProperty('isEditing')
    },
    deleteComment () {
      // console.log('hi', this.get('comment'))
      this.sendAction('deleteComment', this.get('comment'))
    },
    updateComment () {
      // console.log('hi there', this.get('comment'))
      this.sendAction('updateComment', this.get('comment'))
      this.toggleProperty('isEditing')
    },
    cancelCommentChanges () {
      // console.log('nahh')
      const thisComment = this.get('comment')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
    }
  }
});

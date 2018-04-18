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
      console.log('hi', this.get('comment'))
      this.sendAction('deleteComment', this.get('comment'))
    },
    updateComment () {
      console.log('hi there', this.get('comment'))
      this.sendAction('updateComment', this.get('comment'))
      this.toggleProperty('isEditing')
    },
    refresh () {
      console.log('go!')
      this.toggleProperty('isEditing')
      this.sendAction('refresh')
    }
  }
});

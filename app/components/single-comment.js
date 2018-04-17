import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  actions: {
    deleteComment () {
      console.log('hi', this.get('comment'))
      this.sendAction('deleteComment', this.get('comment'))
    }
  }
});

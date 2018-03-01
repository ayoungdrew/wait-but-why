<<<<<<< HEAD
import Ember from 'ember';

export default Ember.Component.extend({
=======
import Component from '@ember/component';

export default Component.extend({
>>>>>>> Update 022/master from ember-auth-template
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});

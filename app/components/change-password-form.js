<<<<<<< HEAD
import Ember from 'ember';

export default Ember.Component.extend({
=======
import Component from '@ember/component';

export default Component.extend({
>>>>>>> Update 022/master from ember-auth-template
  tagName: 'form',
  classNames: ['form-horizontal'],

  passwords: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('passwords'));
    },

    reset () {
      this.set('passwords', {});
    },
  },
});

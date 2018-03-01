<<<<<<< HEAD
import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
=======
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  auth: service(),

  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),
>>>>>>> Update 022/master from ember-auth-template

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});

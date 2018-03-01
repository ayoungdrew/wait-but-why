<<<<<<< HEAD
import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
=======
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  auth: service(),
  flashMessages: service(),
>>>>>>> Update 022/master from ember-auth-template

  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('application'))
        .then(() => this.get('flashMessages').success('Thanks for signing in!'))
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.');
        });
    },
  },
});

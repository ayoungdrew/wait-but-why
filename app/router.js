<<<<<<< HEAD
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
=======
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
<<<<<<< HEAD
  rootURL: config.rootURL
>>>>>>> Update 022/master from ember-auth-template
=======
  rootURL: config.rootURL,
>>>>>>> Run command line tasks
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
});

export default Router;

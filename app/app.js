<<<<<<< HEAD
=======
import Application from '@ember/application';
>>>>>>> Update 022/master from ember-auth-template
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

<<<<<<< HEAD
App = Ember.Application.extend({
=======
App = Application.extend({
>>>>>>> Update 022/master from ember-auth-template
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

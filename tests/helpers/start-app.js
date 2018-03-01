<<<<<<< HEAD
import Ember from 'ember';
=======
import { run } from '@ember/runloop';
import { merge } from '@ember/polyfills';
>>>>>>> Update 022/master from ember-auth-template
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  let application;

<<<<<<< HEAD
  let attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(() => {
=======
  let attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  run(() => {
>>>>>>> Update 022/master from ember-auth-template
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}

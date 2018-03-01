<<<<<<< HEAD
import Ember from 'ember';
=======
import Application from '@ember/application';
import { run } from '@ember/runloop';
>>>>>>> Update 022/master from ember-auth-template
import TextFieldInitializer from 'ga-wdi-boston.ember-auth/initializers/text-field';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | text field', {
  beforeEach () {
<<<<<<< HEAD
    Ember.run(function () {
      application = Ember.Application.create();
=======
    run(function () {
      application = Application.create();
>>>>>>> Update 022/master from ember-auth-template
      application.deferReadiness();
    });
  },
});

// Replace this with your real tests.
test('it works', function (assert) {
  TextFieldInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

<<<<<<< HEAD
import Ember from 'ember';

export function initialize() {
  Ember.TextField.reopen({
=======
import TextField from '@ember/component/text-field';

export function initialize() {
  TextField.reopen({
>>>>>>> Update 022/master from ember-auth-template
    classNames: ['form-control'],
  });
}

export default {
  name: 'text-field',
  initialize,
};

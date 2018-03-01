<<<<<<< HEAD
import Ember from 'ember';

export default Ember.Component.extend({
=======
import Component from '@ember/component';

export default Component.extend({
>>>>>>> Update 022/master from ember-auth-template
  tagName: 'button',
  classNames: ['navbar-toggle', 'collapsed'],
  attributeBindings: [
    'toggle:data-toggle',
    'target:data-target',
    'expanded:aria-expanded',
  ],
  toggle: 'collapse',
  target: '#navigation',
  expanded: false,
});

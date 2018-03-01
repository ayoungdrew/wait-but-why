<<<<<<< HEAD
import Ember from 'ember';

export default Ember.Route.extend({
=======
import Route from '@ember/routing/route';

export default Route.extend({
>>>>>>> Update 022/master from ember-auth-template
  model () {
    return this.get('store').findAll('user');
  },
});

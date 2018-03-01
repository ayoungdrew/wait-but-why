<<<<<<< HEAD
import Ember from 'ember';

export default function destroyApp(application) {
  Ember.run(application, 'destroy');
=======
import { run } from '@ember/runloop';

export default function destroyApp(application) {
  run(application, 'destroy');
>>>>>>> Update 022/master from ember-auth-template
}

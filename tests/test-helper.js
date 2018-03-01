import resolver from './helpers/resolver';
import './helpers/flash-message';
<<<<<<< HEAD

import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);
=======
import { setResolver } from '@ember/test-helpers';
import { start } from 'ember-cli-qunit';

setResolver(resolver);
start();
>>>>>>> Update 022/master from ember-auth-template

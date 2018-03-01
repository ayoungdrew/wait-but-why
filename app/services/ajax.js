<<<<<<< HEAD
import Ember from 'ember';
=======
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
>>>>>>> Update 022/master from ember-auth-template
import AjaxService from 'ember-ajax/services/ajax';

import ENV from 'ga-wdi-boston.ember-auth/config/environment';

export default AjaxService.extend({
  host: ENV.apiHost,

<<<<<<< HEAD
  auth: Ember.inject.service(),
  headers: Ember.computed('auth.credentials.token', {
=======
  auth: service(),
  headers: computed('auth.credentials.token', {
>>>>>>> Update 022/master from ember-auth-template
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});

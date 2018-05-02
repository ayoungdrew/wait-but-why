import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return RSVP.Promise.resolve({})
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.transitionTo('application'))
        .then(() => { this.toast.success('Signed in!', '', { positionClass: 'toast-bottom-right' }) })
    .catch((error) => { this.toast.error('Problem signing in...', error, { positionClass: 'toast-bottom-right' }) })
    }
  }
})

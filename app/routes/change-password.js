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
    changePassword (passwords) {
      if (passwords.next === passwords.confirmNext) {
        this.get('auth').changePassword(passwords)
        .then(() => this.get('auth').signOut())
        .then(() => this.transitionTo('sign-in'))
    .then(() => { this.toast.success('Changed password', '', { positionClass: 'toast-bottom-right' }) })
    .then(() => { this.toast.success('You\'ve been signed out', '', { positionClass: 'toast-bottom-right' }) })
    .catch((error) => { this.toast.error('Oh noes!!', error, { positionClass: 'toast-bottom-right' }) })
      } else {
        this.toast.error('Password must match', '', { positionClass: 'toast-bottom-right' })
      }
    }
  }
})

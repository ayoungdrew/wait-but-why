import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

export default Route.extend({
  auth: service(),
  flashMessages: service(),

  model () {
    return RSVP.Promise.resolve({
      user: this.get('auth.credentials'),
      passwords: {}
    })
  },

  actions: {
    changeImage (newImage) {
      console.log('made it', newImage)
      const data = {
        image: newImage,
        userId: this.get('auth.credentials.id')
      }
      this.get('auth').changeImage(data)
      .then((result) => {
        this.get('auth.credentials').set('image', result.user.image)
      })
      .then(() => {
        this.toast.success('Image saved', 'Success')
      })
      .catch(() => {
        this.toast.error('There was a problem. Please try again.', 'Error')
        this.get('model').rollbackAttributes()
      })
    },
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

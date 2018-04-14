import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('episodes', function () {})
  this.route('examples')
  this.route('episode', { path: '/episodes/:episode_id' })
  this.route('edit-episode', { path: '/episodes/:episode_id/edit' })
  this.route('user', { path: '/users/:user_id' })
})

export default Router

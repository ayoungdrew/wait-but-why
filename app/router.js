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
  this.route('events', function () {})
  this.route('examples')
  this.route('event', { path: '/events/:event_id' }, function () {
    this.route('edit-comment')
  })
  this.route('edit-event', { path: '/events/:event_id/edit' })
  this.route('user', { path: '/users/:user_id' })
  this.route('friends');
})

export default Router

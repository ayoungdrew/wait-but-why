import { alias } from '@ember/object/computed'
import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend({
  auth: service(),

  // currentUser: alias()
  user: alias('auth.credentials.email'),
  userId: alias('auth.credentials.id'),
  isAuthenticated: alias('auth.isAuthenticated')

})

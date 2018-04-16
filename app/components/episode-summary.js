import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  userId: alias('auth.credentials.id'),
  isAuthenticated: alias('auth.isAuthenticated'),

  actions: {
    deleteEpisode (episode) {
      console.log(episode)
      console.log('hey')
      this.sendAction('deleteSingleEpisode', this.get('episode'))
    }
  }
});

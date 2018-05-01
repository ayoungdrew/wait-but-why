import Component from '@ember/component'

export default Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      console.log(this.get('image'))
      this.sendAction('submit', this.get('image'))
    },

    reset () {
      this.sendAction('reset')
    }
  }
})

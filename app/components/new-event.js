import Component from '@ember/component';

export default Component.extend({
  event: {
    title: '',
    date: '',
    reason: '',
    description: ''
  },

  actions: {
    setSelection (selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    newEvent () {
      this.event.reason = this.get('selectedOption')
      this.sendAction('create', this.get('event'))
      this.set('event', {})
      console.log('hm', this.get('event'))
    }
  }
})

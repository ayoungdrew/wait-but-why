import Component from '@ember/component';

export default Component.extend({
  didInsertElement () {
      this.set('event', {
      title: '',
      date: '',
      reason: '',
      description: ''
    })
  },
  eventYear: '',

  actions: {
    setMonthSelection (selected) {
      this.set('eventMonth', selected)
      // console.log(this.get('eventMonth'))
    },
    setYearSelection (selected) {
      this.set('eventYear', selected)
      // console.log(this.get('eventYear'))
    },
    setReasonSelection (selected) {
      this.set('selectedReason', selected)
      // console.log(this.get('selectedReason'))
    },
    newEvent () {
      const compiledDate = `${this.get('eventYear')}${this.get('eventMonth')}01`
      // console.log('test', compiledDate)
      this.event.date = compiledDate
      this.event.reason = this.get('selectedReason')
      // console.log(this.get('event').description.length)
      if ((this.get('event').title.length > 1) && (this.get('event').description.length > 1)) {
        this.sendAction('create', this.get('event'))
        this.set('event', {})
        $('#newReasonSelector').get(0).selectedIndex = 0
        $('#newMonthSelector').get(0).selectedIndex = 0
        $('#newYearSelector').get(0).selectedIndex = 0
      } else {
        this.toast.error('Finish filling out the form silly :P', '', { positionClass: 'toast-bottom-right' })
      }
    }
  }
})

import { alias } from '@ember/object/computed'
import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
  didInsertElement () {
    const eventItem = this.get('model')
    eventItem.rollbackAttributes()
    this.set('eventYear', this.get('model').get('date').substring(0, 4))
    this.set('eventMonth', this.get('model').get('date').substring(5, 7))
  },
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
    saveSingleEvent (event) {
      // console.log('data received', event)
      const compiledDate = `${this.get('eventYear')}${this.get('eventMonth')}01`
      event.set('date', compiledDate)
      if (this.get('selectedReason')) {
        event.reason = this.get('selectedReason')
      }
      // console.log('sending data', event)
      this.sendAction('save', this.get('model'))
    },
    cancelChanges () {
      // console.log('nah dont change event', this.get('model'))
      const thisComment = this.get('model')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
      this.sendAction('backToEvents', this.get('model'))
    }
  }
})

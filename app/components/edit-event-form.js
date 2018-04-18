import Component from '@ember/component';

export default Component.extend({
  actions: {
    setSelection (selected) {
      this.set('selectedOption', selected)
      console.log(this.get('selectedOption'))
    },
    saveSingleEvent (event) {
      console.log('sending data', event)
      if (this.get('selectedOption')) {
        event.reason = this.get('selectedOption')
      }
      this.sendAction('save', this.get('model'))
    },
    cancelChanges () {
      console.log('nahh', this.get('model'))
      const thisComment = this.get('model')
      thisComment.rollbackAttributes()
      this.toggleProperty('isEditing')
      this.sendAction('backToEvents', this.get('model'))
    }
  }
});

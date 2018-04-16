import Component from '@ember/component';
// import { select } from "yourappname/tests/helpers/x-select";
 // import { select } from "wait-but-why-client/tests/helpers/x-select";
export default Component.extend({
  episode: {
    title: '',
    date: '',
    why: '',
    description: ''
  },

  actions: {
    setSelection: function (selected) {
     this.set('selectedOption', selected)
     console.log(this.get('selectedOption'))
   },
    newEpisode () {
      this.episode.why = this.get('selectedOption')
      this.sendAction('create', this.get('episode'))
    }
  }
});

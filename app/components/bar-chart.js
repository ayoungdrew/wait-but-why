import Component from '@ember/component';
import { select } from 'd3-selection'

export default Component.extend({
  didInsertElement() {

    const eventsData = [
      this.get('model.wantedPosts').length, this.get('model.hadToPosts').length, this.get('model.noControlPosts').length
    ]

    let svg = select(this.$('svg')[0])

    svg.selectAll('rect').data(eventsData)
      .enter()
      .append('rect')
      .attr('width', 20)
      .attr('height', post => post * 10)
      .attr("x", (data, index) => {return index * 50})
  }
});

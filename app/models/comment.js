import DS from 'ember-data';

export default DS.Model.extend({
  commenter: DS.attr('string'),
  body: DS.attr('string'),
  event_id: DS.attr('number')
});

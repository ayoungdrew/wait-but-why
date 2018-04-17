import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  event_id: DS.attr('number'),
  user_id: DS.attr(),
  user: DS.attr()
});

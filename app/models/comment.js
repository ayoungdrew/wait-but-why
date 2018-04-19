import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  // event_id: DS.attr('number'),
  event: DS.belongsTo('event'),
  user_id: DS.attr(),
  user: DS.belongsTo('user'),
  editable: DS.attr(),
  commenter: DS.attr(),
  created_at: DS.attr('date')
});

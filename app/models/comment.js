import DS from 'ember-data'

export default DS.Model.extend({
  body: DS.attr('string'),
  event: DS.belongsTo('event'),
  user_id: DS.attr(),
  user: DS.belongsTo('user'),
  editable: DS.attr(),
  commenter: DS.attr(),
  commenter_image: DS.attr('string'),
  created_at: DS.attr('date')
})

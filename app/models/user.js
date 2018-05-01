import DS from 'ember-data'

export default DS.Model.extend({
  user_id: DS.attr(),
  email: DS.attr('string'),
  image: DS.attr('string'),
  created_at: DS.attr('date'),
  following: DS.attr(),
  followers: DS.attr(),
  active_relationships: DS.attr()
})

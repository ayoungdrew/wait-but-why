import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  follower_id: DS.attr('number'),
  followed_id: DS.attr('number'),
  follower: DS.attr('string'),
  followed: DS.attr('string'),
  editable: DS.attr()
})

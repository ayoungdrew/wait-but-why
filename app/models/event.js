import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr(''),
  reason: DS.attr('string'),
  description: DS.attr('string'),
  user_id: DS.attr('number'),
  user: DS.hasMany('user'),
  editable: DS.attr(),
  comments: DS.hasMany('comment'),
  author: DS.attr('string')
});

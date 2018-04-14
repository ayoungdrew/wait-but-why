import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  date: DS.attr('date'),
  why: DS.attr('string'),
  description: DS.attr('string'),
  user_id: DS.attr('number'),
  user: DS.attr()
});

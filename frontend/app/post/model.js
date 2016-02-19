import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  image: DS.attr('string'),
  createdAt: DS.attr('date')
});

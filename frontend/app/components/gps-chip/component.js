import Ember from 'ember';

export default Ember.Component.extend({
  point: Ember.computed('model.latitude', 'model.longitude', function () {
    return SMap.Coords.fromWGS84(this.get('model.longitude'), this.get('model.latitude'));
  }),

  latitude: Ember.computed('point', function () {
    return this.get('point').toWGS84(1)[0];
  }),

  longitude: Ember.computed('point', function () {
    return this.get('point').toWGS84(1)[1];
  })
});

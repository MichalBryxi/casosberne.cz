import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  url: location.origin + '/api/v1/tweets',
  options: {
    maximumValidFiles: 1,
    uploadImmediately: true
  }
});

import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  url: `${location.origin}/api/v1/tweets`,
  options: Ember.computed('message', function() {
    console.log(this.get('message'));
    return {
      maximumValidFiles: 1,
      uploadImmediately: true,
      requestPostData: this.get('message')
    }
  })
});

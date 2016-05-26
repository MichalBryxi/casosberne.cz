import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  url: `${location.origin}/api/v1/tweets`,
  options: Ember.computed('message', function() {
    return {
      maximumValidFiles: 1,
      uploadImmediately: false,
      requestPostData: { message: this.get('message') }
    }
  }),

  didReceiveAttrs(attrs) {
    if(attrs.newAttrs.sending.value === true) {
      this.send('uploadFiles');
      this.get('didSendForm')();
    }
  }
});

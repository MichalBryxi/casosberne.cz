import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  url: `${location.origin}/api/v1/tweets`,
  options: {
      maximumValidFiles: 1,
      uploadImmediately: false
  },
  choosingFile: false,

  actions: {
    chooseFile() {
      this.set('choosingFile', true);
    },
    fileWasChosen() {
      this.set('choosingFile', false);
    }
  },

  didReceiveAttrs(attrs) {
    if(attrs.newAttrs.sending.value === true) {
      this.set('options.requestPostData', {message: this.get('message')});
      this.send('uploadFiles');
      this.get('didSendForm')();
    }
  }
});

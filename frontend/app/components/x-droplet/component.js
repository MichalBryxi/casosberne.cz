import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  url: `${location.origin}/api/v1/tweets`,
  options: {
      maximumValidFiles: 1,
      uploadImmediately: false
  },

  didReceiveAttrs(attrs) {
    if(attrs.newAttrs.sending.value === true) {
      let postData = {
        message: this.get('message'),
        'project_id': this.get('projectId')
      }
      this.set('options.requestPostData', postData);
      this.send('uploadFiles');
      this.get('didSendForm')();
    }
  }
});

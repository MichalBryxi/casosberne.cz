import Ember from 'ember';

export default Ember.Component.extend({
  maxLength: 100,
  message: '',
  sending: false,

  didInsertElement() {
    this._super(...arguments);
    // This does not really work :-(
    this.$('#new-post-body').characterCounter();
  },

  actions: {
    sendForm() {
      this.set('sending', true);
    },
    didSendForm() {
      console.log('form was sent');
    }
  }
});

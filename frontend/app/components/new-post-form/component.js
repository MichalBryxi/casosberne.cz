import Ember from 'ember';

export default Ember.Component.extend({
  maxLength: 100,
  
  didInsertElement() {
    this._super(...arguments);
    // This does not really work :-(
    this.$('#new-post-body').characterCounter();
  }
});

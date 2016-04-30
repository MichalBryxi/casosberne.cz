import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      this.send('setFullscreen', true);
      return true;
    },
    willTransition() {
      this.send('setFullscreen', false);
      return true;
    }
  }
});

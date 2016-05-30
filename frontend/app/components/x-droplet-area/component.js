import Ember from 'ember';

export default Ember.Component.extend(Droplet.Area, {
  isChoosingFile: false,

  click(foo) {
    this.set('isChoosingFile', true);
  },

  actions: {
    fileWasChosen() {
      this.set('isChoosingFile', false);
    }
  }
});

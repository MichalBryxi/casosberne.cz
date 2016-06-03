import Ember from 'ember';
import Droplet from 'ember-droplet/components/Droplet';

export default Ember.Component.extend(Droplet.Area, {
  isChoosingFile: false,

  click() {
    this.set('isChoosingFile', true);
  },

  actions: {
    fileWasChosen() {
      this.set('isChoosingFile', false);
    }
  }
});

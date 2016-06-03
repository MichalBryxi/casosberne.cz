import Ember from 'ember';
import Droplet from 'ember-droplet/components/Droplet';

export default Ember.Component.extend(Droplet.MultipleInput, {
  didReceiveAttrs(attrs) {
    if (attrs.newAttrs.isChoosingFile.value === true) {
      this.$().click();
    }
  },

  fileWasChosen: function() {
    this.sendAction('fileWasChosen');
  }.on('change')
});

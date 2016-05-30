import Ember from 'ember';

export default Ember.Component.extend(Droplet.MultipleInput, {
  didReceiveAttrs(attrs) {
    if(attrs.newAttrs.choosingFile.value === true) {
      this.$().click();
    }
  },

  fileWasChosen: function() {
    this.sendAction('fileWasChosen');
  }.on('change')
});

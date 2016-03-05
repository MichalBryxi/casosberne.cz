import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['card'],
  date: Ember.computed('post.createdAt', function () {
    let createdAt = this.get('post.createdAt');
    return moment(createdAt).format('DD.MM.');
  })
});

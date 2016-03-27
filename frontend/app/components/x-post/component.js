import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  classNames: ['x-post'],
  date: Ember.computed('post.createdAt', function () {
    let createdAt = this.get('post.createdAt');
    return moment(createdAt).format('DD.MM.');
  })
});

import Ember from 'ember';
import { linkify } from 'ember-linkify/helpers/linkify';

export default Ember.Controller.extend({
  photos: Ember.computed.map('model.posts', function(post) {
    let date = moment(this.get('post.createdAt')).format('DD.MM.');
    let body = linkify(post.get('body'));

    let title = `${date} - ${body}`;
    let w = 800;
    let h = 600;
    let src = post.get('image');

    return { src, w, h, title };
  })
});

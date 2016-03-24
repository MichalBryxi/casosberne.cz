import Ember from 'ember';
import { linkify } from 'ember-linkify/helpers/linkify';

export default Ember.Controller.extend({
  photos: Ember.computed.map('model.posts', function (post) {
    return {
      src: post.get('image'),
      w: 800,
      h: 600,
      title: linkify(post.get('body'))
    };
  })
});

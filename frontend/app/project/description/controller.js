import Ember from 'ember';
import { linkify } from 'ember-linkify/helpers/linkify';
import moment from 'moment';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  sortBy: ['createdAt:desc'],
  isFormDisplayed: false,
  photoSwipePosts: [],
  postsSorted: Ember.computed.sort('model.posts', 'sortBy'),

  // PhotoSwipe internally rewrites data of whatever is returned here.
  // Ember does not like it's data being modified outside of .set() methods.
  // A little hacky solution, but works.
  postsObserver: Ember.observer('postsSorted.[]', function () {
    let photoSwipeData = this.get('postsSorted').map(function (post) {
      let date = moment(post.get('createdAt')).format('DD.MM.');
      let body = linkify([post.getWithDefault('body', '')]);
      let user = post.getWithDefault('user', '');
      let userUrl = `<a href="http://twitter.com/${user}">@${user}</a>`;

      let title = `${date} - ${body} - ${userUrl}`;
      let w = 600;
      let h = 338;
      let src = post.get('image');
      let createdAt = post.get('createdAt');

      return { src, w, h, title, createdAt };
    });

    this.set('photoSwipePosts', photoSwipeData);
  }),

  actions: {
    toggleForm() {
      this.toggleProperty('isFormDisplayed');
    }
  }
});

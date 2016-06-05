import Ember from 'ember';
import { linkify } from 'ember-linkify/helpers/linkify';
import moment from 'moment';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),
  sortBy: ['createdAt:desc'],
  isFormDisplayed: false,
  postsSorted: Ember.computed.sort('model.posts', 'sortBy'),
  defaultImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png',

  photoSwipePosts: Ember.computed.map('postsSorted', function (post) {
    let date = moment(post.get('createdAt')).format('DD.MM.');
    let body = linkify([post.getWithDefault('body', '')]);
    let user = post.getWithDefault('user', '');
    let userUrl = `<a href="http://twitter.com/${user}">@${user}</a>`;

    let title = `${date} - ${body} - ${userUrl}`;
    let w = 600;
    let h = 338;
    let src = post.getWithDefault('image');
    if(Ember.isEmpty(src)) {
      src = this.get('defaultImage');
    }
    let createdAt = post.get('createdAt');

    return { src, w, h, title, createdAt };
  }),

  actions: {
    toggleForm() {
      this.toggleProperty('isFormDisplayed');
    }
  }
});

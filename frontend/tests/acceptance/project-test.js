import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | project');

test('visiting /project', function(assert) {
  assert.expect(4);

  let postsCount = 3;
  let project = server.create('project', 1);
  let posts = server.createList('post', postsCount, { projectId: project.id });

  visit(`/project/${project.id}`);

  andThen(function() {
    assert.equal(find('.project-heading').text(), project.name, 'Page heading found');
    assert.equal(find('.project-description').text().trim(), project.description, 'Page description found');
    assert.equal(find('.x-post').length, postsCount, 'Correct number of posts is rendered');

    let sortedPosts = posts.sortBy('createdAt').reverse();
    let firstPostDate = moment(sortedPosts[0].createdAt).format('DD.MM.');
    assert.equal(find('.project-posts a:nth-of-type(1) .x-post-date').text(), firstPostDate, 'Correct date is rendered');
  });
});

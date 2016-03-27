export default function() {
  this.namespace = '/api/v1';

  this.get('/posts');
  this.get('/projects');
}

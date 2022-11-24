// post CRUD API
import { posts } from '@/api';
// post api
function fetchPosts() {
  return posts.get('/');
}
function createPost(payload) {
  return posts.post('/', payload);
}
function deletePost(id) {
  return posts.delete(id);
}
function editPost(id, payload) {
  return posts.put(id, payload);
}
function fetchPost(payload) {
  return posts.get(payload);
}

export { fetchPosts, createPost, deletePost, editPost, fetchPost };

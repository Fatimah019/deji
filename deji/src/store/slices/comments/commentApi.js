import api from "../../api";

export async function getPostComments(postId) {
  const response = await api.get(`/posts/${postId}/comments`);
  return response;
}

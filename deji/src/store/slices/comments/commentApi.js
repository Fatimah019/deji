import api from "../../api";

/**
 * @function getPostComments
 * @param postId
 * @description gets post comments by post id
 * @returns
 */
export async function getPostComments(postId) {
  const response = await api.get(`/posts/${postId}/comments`);
  return response;
}

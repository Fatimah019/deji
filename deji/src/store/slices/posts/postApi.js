import api from "../../api";

export async function getPosts(userId) {
  const response = await api.get(`/posts?userId=${userId}`);
  return response;
}

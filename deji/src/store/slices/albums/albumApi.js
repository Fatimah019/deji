import api from "../../api";

export async function getAlbums() {
  const response = await api.get("/albums");
  return response;
}

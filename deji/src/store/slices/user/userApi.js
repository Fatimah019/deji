import api from "../../api";

export async function getAllUsers() {
  const response = await api.get("/users");
  return response;
}

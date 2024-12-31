import axios from "axios";

function createAxiosInstance() {
  const userStr = localStorage.getItem("user");
  const token = userStr ? JSON.parse(userStr).authToken : null;
  return axios.create({
    baseURL: "https://reqres.in/api",
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });
}

export const API = createAxiosInstance();

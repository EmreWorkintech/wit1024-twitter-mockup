import axios from "axios";

function createAxiosInstance(env) {
  const userStr = localStorage.getItem("user");
  const token =
    userStr && userStr != "null" ? JSON.parse(userStr).authToken : null;
  return axios.create({
    baseURL:
      env === "prod"
        ? "https://669617c50312447373c1057a.mockapi.io/api/v1"
        : "https://reqres.in/api",
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });
}

export const API = createAxiosInstance();
export const API_PROD = createAxiosInstance("prod");

export function getPosts() {
  return axios
    .get("https://669617c50312447373c1057a.mockapi.io/api/v1/comments")
    .then((response) => response.data);
}

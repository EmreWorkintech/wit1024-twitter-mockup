import { postList } from "../../data";

export const GET_POSTS = "Get_users";
export const GET_POSTS_LOADING = "Get_users is in loadin state";
export const GET_POSTS_SUCCESS = "Get users success";
export const GET_POSTS_ERROR = "Get users gets error";

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: postList,
  };
}

import { API_PROD } from "../../services/api";

export const GET_POSTS = "Get_users";
export const GET_POSTS_LOADING = "Get_users is in loadin state";
export const GET_POSTS_SUCCESS = "Get users success";
export const GET_POSTS_ERROR = "Get users gets error";

function loading() {
  return {
    type: GET_POSTS_LOADING,
  };
}

function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts,
  };
}

function getPostsError(error) {
  return {
    type: GET_POSTS_ERROR,
    payload: error,
  };
}

export const getPosts = () => (dispatch) => {
  dispatch(loading());
  API_PROD.get("/comments")
    .then((response) => {
      dispatch(getPostsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getPostsError(error));
    });
};

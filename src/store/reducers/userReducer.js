import {
  GET_POSTS_ERROR,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
} from "../actions/userActions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return { ...state, loading: true, error: null };
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: null };
    case GET_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

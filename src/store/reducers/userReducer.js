import { GET_POSTS } from "../actions/userActions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}

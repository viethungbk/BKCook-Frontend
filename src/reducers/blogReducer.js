import { blogAction } from '../constants/ActionType';

let initState = {
  totalRecords: 0,
  currentBlogs: [],
  currentBlog: {}
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case blogAction.FETCH_POST:
      state = {
        ...state,
        currentBlog: state.currentBlogs.filter(blog => blog.url_key === action.url_key)[0]
      }
      return state;
    case blogAction.FETCH_POSTS:
      state = {
        ...state,
        ...action.data
      }
      return { ...state }
    default:
      return { ...state };
  }
}

export default blogReducer;
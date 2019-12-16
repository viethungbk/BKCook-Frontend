import { blogConstants } from '../constants/blogConstants'

const searchBlogReducerInitialState = {
  totalRecords: 0,
  blogs: []
}
const searchBlogReducer = (state = searchBlogReducerInitialState, action) => {
  switch (action.type) {
    case blogConstants.SEARCH_BLOG:
      state = {
        totalRecords: action.totalRecords,
        blogs: action.blogs
      }
      return state
    case blogConstants.RESET_SEARCH:
      return searchBlogReducerInitialState
    default:
      return state
  }
}

export default searchBlogReducer
import { blogConstants } from '../constants/blogConstants';

let initState = {}

const currentBlogReducer = (state = initState, action) => {
  switch (action.type) {
    case blogConstants.FETCH_BLOG:
      return { ...state, ...action.blog }
    default:
      return { ...state }
  }
}

export default currentBlogReducer
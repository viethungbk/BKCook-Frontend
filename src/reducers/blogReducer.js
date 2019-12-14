import { blogConstants } from '../constants/blogConstants'

let initState = {
  totalRecords: 0,
  blogs: []
}

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case blogConstants.FETCH_BLOGS:
      let { totalRecords, blogs } = action
      return { ...state, totalRecords, blogs }
    default:
      return state
  }
}

export default blogReducer
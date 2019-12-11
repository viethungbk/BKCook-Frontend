import { blogAction } from '../constants/ActionType';

let initState = {}

const currentBlogReducer = (state = initState, action) => {
  switch (action.type) {
    case blogAction.FETCH_POST:
      state = {
        ...state,
        ...action.post
      }

      return state
    default:
      return { ...state }
  }
}

export default currentBlogReducer
import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import currentBlogReducer from './currentBlogReducer'
import topBlogReducer from './topBlogReducer'

const appReducers = combineReducers({
  blogReducer,
  currentBlogReducer,
  topBlogReducer
});

export default appReducers
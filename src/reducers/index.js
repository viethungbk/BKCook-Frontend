import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import topBlogReducer from './topBlogReducer'
import pageReducer from './pageReducer'

const appReducers = combineReducers({
  blogReducer,
  topBlogReducer,
  pageReducer
});

export default appReducers
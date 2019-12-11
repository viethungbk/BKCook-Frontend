import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import topBlogReducer from './topBlogReducer'
import currentBlogReducer from './currentBlogReducer'

const appReducers = combineReducers({
  blogReducer,
  topBlogReducer,
  currentBlogReducer
})

export default appReducers
import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import topBlogReducer from './topBlogReducer'
import currentBlogReducer from './currentBlogReducer'
import authenticationReducer from './authenticationReducer'
import alertReducer from './alertReducer'
import registrationReducer from './registrationReducer'
import recipeReducer from './recipeReducer'

const appReducers = combineReducers({
  blogReducer,
  topBlogReducer,
  currentBlogReducer,
  authenticationReducer,
  alertReducer,
  registrationReducer,
  recipeReducer
})

export default appReducers
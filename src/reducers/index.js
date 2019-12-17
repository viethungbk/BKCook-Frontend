import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import topBlogReducer from './topBlogReducer'
import currentBlogReducer from './currentBlogReducer'
import authenticationReducer from './authenticationReducer'
import registrationReducer from './registrationReducer'
import recipeReducer from './recipeReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'
import listRecipeReducer from './listRecipeReducer'
import searchRecipeReducer from './searchRecipeReducer'
import searchBlogReducer from './searchBlogReducer'
import currentRecipeReducer from './currentRecipeReducer'
import relatedRecipeReducer from './relatedRecipeReducer'
import filterRecipeReducer from './filterRecipeReducer'

const appReducers = combineReducers({
  blogReducer,
  topBlogReducer,
  currentBlogReducer,
  authenticationReducer,
  registrationReducer,
  recipeReducer,
  toastrReducer,
  listRecipeReducer,
  searchRecipeReducer,
  searchBlogReducer,
  currentRecipeReducer,
  relatedRecipeReducer,
  filterRecipeReducer
})

export default appReducers
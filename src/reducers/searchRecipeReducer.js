import {recipeConstants} from '../constants/recipeConstants'

const initState = {
  totalRecords: 0,
  recipes: []
}
const searchRecipeReducer = (state = initState, action) => {
  switch (action.type) {
    case recipeConstants.RECIPE_SEARCH:
      state = {
        totalRecords: action.totalRecords,
        recipes: action.recipes
      }
      return state
    case recipeConstants.RECIPE_RESET_SEARCH:
      return initState
    default:
      return state
  }
}

export default searchRecipeReducer
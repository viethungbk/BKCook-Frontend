import { recipeConstants } from '../constants/recipeConstants'

const filerRecipeReducerInitialState = {
  totalRecords: 0,
  recipes: []
}
const filerRecipeReducer = (state = filerRecipeReducerInitialState, action) => {
  switch (action.type) {
    case recipeConstants.FILTER:
      state = {
        totalRecords: action.totalRecords,
        recipes: action.recipes
      }
      return state
    default:
      return state
  }
}

export default filerRecipeReducer
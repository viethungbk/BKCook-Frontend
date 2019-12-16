import { recipeConstants } from '../constants/recipeConstants'

const relatedRecipeReducerInitialState = {
  totalRecords: 0,
  recipes: []
}
const relatedRecipeReducer = (state = relatedRecipeReducerInitialState, action) => {
  switch (action.type) {
    case recipeConstants.GET_RELATED_RECIPE:
      state = {
        totalRecords: action.totalRecords,
        recipes: action.recipes
      }
      return state
    default:
      return state
  }
}

export default relatedRecipeReducer
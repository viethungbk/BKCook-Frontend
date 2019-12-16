import { recipeConstants } from '../constants/recipeConstants'

const initialState = {
  totalRecords: 0,
  recipes: []
}
const listRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case recipeConstants.RECIPE_GET_RECIPES:
      state = {
        ...state,
        totalRecords: action.totalRecords,
        recipes: action.recipes
      }
      return state
    default:
      return state
  }
}

export default listRecipeReducer
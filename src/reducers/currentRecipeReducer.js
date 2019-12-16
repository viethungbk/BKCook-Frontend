import { recipeConstants } from '../constants/recipeConstants'

const currentRecipeReducerInitialState = {}
const currentRecipeReducer = (state = currentRecipeReducerInitialState, action) => {
  switch (action.type) {
    case recipeConstants.RECIPE_GET_RECIPE:
      console.log(state)
      state = action.recipe
      console.log(state)
      return state
    default:
      console.log(state)
      return state
  }
}

export default currentRecipeReducer
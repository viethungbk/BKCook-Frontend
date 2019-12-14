import { recipeService } from '../services/recipeService'

export const recipeActions = {
  addRecipe
}

function addRecipe(basicInfo) {
  return dispatch => {
    recipeService.addRecipe(basicInfo)
  }
}
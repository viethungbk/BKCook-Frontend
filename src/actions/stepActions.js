import { stepConstants } from '../constants/stepConstants'
import { recipeService } from '../services/recipeService'

export const stepActions = {
  addStep
}

function addStep(body) {
  return dispatch => {
    dispatch(request())
    recipeService.addRecipeStep(body).then(response => {
      let { success: successStatus, data } = response
      if (successStatus) {
        let { steps } = data
        dispatch(success(steps))
      } else {
        let { message } = data
        dispatch(failure(message))
      }
    })
  }

  function request() { return { type: stepConstants.ADD_STEP_REQUEST } }
  function success(steps) { return { type: stepConstants.ADD_STEP_SUCCESS, steps } }
  function failure(error) { return { type: stepConstants.ADD_STEP_FAILURE, error } }
}
import { recipeService } from '../services/recipeService'
import { alertActions } from '../actions/alertActions'
import { recipeConstants } from '../constants/recipeConstants'

export const recipeActions = {
  addRecipeBasicInfo,
  addRecipeMaterial,
  addRecipeStep,
  addRecipeStepFinish,
  addRecipeFinish
}

function addRecipeBasicInfo(basicInfo) {
  return dispatch => {
    dispatch(request())
    recipeService.addRecipeBasicInfo(basicInfo).then(response => {
      let { success: successStatus, data } = response
      if (successStatus) {// true => redirect trang khac
        let { _id, title, image, shortDescription, level, time } = data
        let recipe = { _id, title, image, shortDescription, level, time }

        dispatch(success(recipe))
      } else { // false => thong bao message
        let { message } = data
        dispatch(alertActions.error(message))
        dispatch(failure(message))
      }
    })
  }

  function request(recipe) { return { type: recipeConstants.RECIPE_ADD_BASIC_INFO_REQUEST, recipe } }
  function success(recipe) { return { type: recipeConstants.RECIPE_ADD_BASIC_INFO_SUCCESS, recipe } }
  function failure(err) { return { type: recipeConstants.RECIPE_ADD_BASIC_INFO_FAILURE, err } }
}

function addRecipeMaterial(body) {
  console.log(body, 'reacipeAction')
  return dispatch => {
    dispatch(request())
    recipeService.addRecipeMaterial(body).then(response => {
      let { success: statusSuccess, data } = response
      console.log(response)

      if (statusSuccess) {
        let { _id, materials } = data

        dispatch(success(_id, materials))
      } else {
        let { message } = data
        dispatch(failure(message))
      }
    })
  }

  function request() { return { type: recipeConstants.RECIPE_ADD_MATERIAL_REQUEST } }
  function success(_id, materials) { return { type: recipeConstants.RECIPE_ADD_MATERIAL_SUCCESS, _id, materials } }
  function failure() { return { type: recipeConstants.RECIPE_ADD_MATERIAL_FAILURE } }
}

function addRecipeStep(step) {
  return dispatch => {
    dispatch(request())
    recipeService.addRecipeStep(step).then(response => {
      let { success: successStatus, data } = response

      if (successStatus) {// true => redirect trang khac
        let { idRecipe, steps } = data

        dispatch(success(idRecipe, steps))
      } else { // false => thong bao message
        let { message } = data
        dispatch(alertActions.error(message))
        dispatch(failure(message))
      }
    })
  }

  function request() { return { type: recipeConstants.RECIPE_ADD_STEP_REQUEST } }
  function success(step) { return { type: recipeConstants.RECIPE_ADD_STEP_SUCCESS, step } }
  function failure(err) { return { type: recipeConstants.RECIPE_ADD_STEP_FAILURE, err } }
}

function addRecipeStepFinish() {
  return { type: recipeConstants.RECIPE_ADD_STEP_FINISH }
}

function addRecipeFinish(recipe) {
  return dispatch => {
    dispatch(request())
    recipeService.addRecipeFinish(recipe).then(response => {
      let { success: statusSuccess, data } = response
      if (statusSuccess) {
        console.log(response)
        dispatch(alertActions.success('thêm công thức thành công'))
        dispatch(success())
      } else {
        let { message } = data
        dispatch(alertActions.error('Thêm công thức không thành công'))
        dispatch(failure(message))
      }
    })
  }

  function request() { return { type: recipeConstants.RECIPE_ADD_FINISH_REQUEST } }
  function success() { return { type: recipeConstants.RECIPE_ADD_FINISH_SUCCESS } }
  function failure(error) { return { type: recipeConstants.RECIPE_ADD_FINISH_FAILURE, error } }
}
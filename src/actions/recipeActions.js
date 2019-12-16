import { recipeService } from '../services/recipeService'
import { recipeConstants } from '../constants/recipeConstants'
import Toastr from '../components/Toastr'

export const recipeActions = {
  fetchRecipes,
  fetchRecipe,
  addRecipeBasicInfo,
  addRecipeMaterial,
  addRecipeStep,
  addRecipeStepFinish,
  addRecipeFinish,
  clean,
  search,
  getRelatedRecipe
}

function clean() {
  return { type: recipeConstants.CLEAR }
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
        Toastr.success('Thêm công thức thành công')
        dispatch(success())
      } else {
        let { message } = data
        dispatch(failure(message))
      }
    })
  }

  function request() { return { type: recipeConstants.RECIPE_ADD_FINISH_REQUEST } }
  function success() { return { type: recipeConstants.RECIPE_ADD_FINISH_SUCCESS } }
  function failure(error) { return { type: recipeConstants.RECIPE_ADD_FINISH_FAILURE, error } }
}

function fetchRecipes(page = 1) {
  return dispatch => {
    recipeService.fetchRecipes(page).then(res => {
      let { totalRecords, recipes } = res.data.data
      dispatch(success(totalRecords, recipes))
    })
  }

  function success(totalRecords, recipes) { return { type: recipeConstants.RECIPE_GET_RECIPES, totalRecords, recipes } }
}

function fetchRecipe(_id) {
  return dispatch => {
    recipeService.fetchRecipe(_id).then(response => {
      let { success: statusSuccess, data } = response
      console.log(response)
      if (statusSuccess) {
        dispatch(success(data))
      }
    })
  }

  function success(recipe) { return { type: recipeConstants.RECIPE_GET_RECIPE, recipe } }
}

function search(keyword) {
  return dispatch => {
    if (keyword === '') {
      dispatch(resetSearch())
    } else {
      recipeService.search(keyword).then(response => {
        let { success, data } = response
        if (success) {
          let { totalRecords, recipes } = data
          dispatch(search(totalRecords, recipes))
        }
      })
    }

  }

  function search(totalRecords, recipes) { return { type: recipeConstants.RECIPE_SEARCH, totalRecords, recipes } }
  function resetSearch() { return { type: recipeConstants.RECIPE_RESET_SEARCH } }
}

function getRelatedRecipe(_id) {
  return dispatch => {
    recipeService.getRelatedRecipe(_id).then(response => {
      let { success: statusSuccess, data } = response
      if (statusSuccess) {
        let { totalRecords, recipes } = data
        dispatch(success(totalRecords, recipes))
      }
    })
  }

  function success(totalRecords, recipes) { return { type: recipeConstants.GET_RELATED_RECIPE, totalRecords, recipes } }
}
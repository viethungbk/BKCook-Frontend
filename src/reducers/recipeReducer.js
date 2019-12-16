import { recipeConstants } from '../constants/recipeConstants'
import { materialConstant } from '../constants/materialContstants'
import { stepConstants } from '../constants/stepConstants'
import uuid from 'react-uuid'

let initState = {
  basicInfoRequesting: false,
  basicInfoRequested: false,
  basicInfoSuccess: false,

  materialRequesting: false,
  materialRequested: false,
  materialSuccess: false,

  oneStepRequesting: false,
  oneStepRequested: false,
  oneStepSuccess: false,

  stepRequesting: false,
  stepRequested: false,
  stepSuccess: false,
  
  finishRequesting: false,
  finishRequested: false,
  finishSuccess: false,
  recipe: {
    materials: [],
    steps: []
  }
}

const recipeReducer = (state = initState, action) => {
  

  switch (action.type) {
    case recipeConstants.RECIPE_ADD_BASIC_INFO_REQUEST:
      state = {
        ...state,
        basicInfoRequesting: true,
        basicInfoRequested: false
      }

      return state
    case recipeConstants.RECIPE_ADD_BASIC_INFO_SUCCESS:
      let { _id, title, image, shortDescription, level, time } = action.recipe
      state = {
        ...state,
        basicInfoRequesting: false,
        basicInfoRequested: true,
        basicInfoSuccess: true,
        recipe: {
          ...state.recipe,
          _id, title, image, shortDescription, level, time
        }
      }

      return state
    case recipeConstants.RECIPE_ADD_BASIC_INFO_FAILURE:
      state = {
        ...state,
        basicInfoRequesting: false,
        basicInfoRequested: true,
        basicInfoSuccess: false
      }

      return state
    case materialConstant.DELETE_MATERIAL:
      let { materials } = state.recipe

      materials = materials.filter(materila => materila._id !== action._id)
      state = { ...state, recipe: { ...state.recipe, materials } }

      return state
    case materialConstant.ADD_MATERIAL:
      let { name, unit, quantitative } = action.material
      let itemMaterial = {
        _id: uuid(),
        name, unit, quantitative
      }
      let { materials: newMaterials } = state.recipe
      
      newMaterials.push(itemMaterial)
      state = {...state, recipe: { ...state.recipe, materials: newMaterials }}

      return state
    case stepConstants.ADD_STEP_REQUEST:
      state = {
        ...state,
        oneStepRequesting: true,
        oneStepRequested: false,
        oneStepSuccess: false
      }
      return state
    case stepConstants.ADD_STEP_SUCCESS:
      state = {
        ...state,
        oneStepRequesting: false,
        oneStepRequested: true,
        oneStepSuccess: true,
        recipe: { ...state.recipe, steps: action.steps }
      }
      return state
    case stepConstants.ADD_STEP_FAILURE:
      state = {
        ...state,
        oneStepRequesting: false,
        oneStepRequested: true,
        oneStepSuccess: false
      }
      return state
    case recipeConstants.RECIPE_ADD_MATERIAL_REQUEST:
      state = {
        ...state,
        materialRequesting: true,
        materialRequested: false,
        materialSuccess: false
      }
      return state
    case recipeConstants.RECIPE_ADD_MATERIAL_SUCCESS:
      state = {
        ...state,
        materialRequesting: false,
        materialRequested: true,
        materialSuccess: true,
        recipe: {
          ...state.recipe,
          idRecipe: action.idRecipe,
          materials: action.materials
        }
      }
      return state
    case recipeConstants.RECIPE_ADD_MATERIAL_FAILURE:
      state = {
        ...state,
        materialRequesting: false,
        materialRequested: true,
        materialSuccess: false,
      }
      return state
    case recipeConstants.RECIPE_ADD_STEP_REQUEST:
      state = {
        ...state,
        stepRequesting: true,
        stepRequested: false,
        stepSuccess: false
      }
      return state
    case recipeConstants.RECIPE_ADD_STEP_SUCCESS:
      state = {
        ...state,
        stepRequesting: false,
        stepRequested: true,
        stepSuccess: false,
        recipe: {
          ...state.recipe,
          idRecipe: action.recipe,
          steps: action.steps
        }
      }
      return state
    case recipeConstants.RECIPE_ADD_STEP_FAILURE:
      state = {
        ...state,
        stepRequesting: false,
        stepRequested: true,
        stepSuccess: false
      }
      return state
    case recipeConstants.RECIPE_ADD_STEP_FINISH:
      state = {
        ...state,
        stepSuccess: true
      }
      return state
    case recipeConstants.RECIPE_ADD_FINISH_REQUEST:
      state = {
        ...state,
        finishRequesting: true,
        finishRequested: false,
        finishSuccess: false
      }
      return state
    case recipeConstants.RECIPE_ADD_FINISH_SUCCESS:
      state = {
        ...state,
        finishRequesting: false,
        finishRequested: true,
        finishSuccess: true
      }
      return state
    case recipeConstants.RECIPE_ADD_FINISH_FAILURE:
      state = {
        ...state,
        finishRequesting: false,
        finishRequested: true,
        finishSuccess: false
      }
      return state
    default:
      return state
  }
}

export default recipeReducer
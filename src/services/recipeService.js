import callApi from '../utils/apiCaller'
import { ITEM_PER_PAGE } from '../constants/Config'

export const recipeService = {
  fetchRecipes,
  fetchRecipe,
  addRecipeBasicInfo,
  addRecipeMaterial,
  addRecipeStep,
  addRecipeFinish,
  search,
  getRelatedRecipe,
  filter
}


function addRecipeBasicInfo(recipeBasic) {
  let formData = new FormData()
  let { title, image, shortDescription, level, time } = recipeBasic
  let accessToken = localStorage.getItem('token')

  let headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  }

  formData.set('title', title)
  formData.set('image', image)
  formData.set('shortDescription', shortDescription)
  formData.set('level', level)
  formData.set('time', time)

  return callApi(
    'api/recipes/basic-info',
    'POST',
    formData,
    headers
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function addRecipeMaterial(body) {
  let accessToken = localStorage.getItem('token')
  let headers = {
    Authorization: `Bearer ${accessToken}`
  }
  console.log(body, 'recipe service')
  return callApi(
    'api/recipes/materials',
    'POST',
    body,
    headers
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function addRecipeStep(body) {
  let formData = new FormData()
  let { idRecipe, stepNumber, description, image } = body
  let accessToken = localStorage.getItem('token')
  let headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  }
  formData.set('idRecipe', idRecipe)
  formData.set('stepNumber', stepNumber)
  formData.set('description', description)
  formData.set('image', image)

  console.log('form data before upload des:');
  for (const [x, y] of formData.entries()) {
    console.log(x, y);
  }

  return callApi(
    'api/recipes/steps',
    'POST',
    formData,
    headers
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function addRecipeFinish(recipe) {
  return addRecipeCate(recipe).then(res => {
    let { success, data } = res
    console.log(res, 'addrecipefinish')

    if (success) {
      recipe = { ...recipe, data }
      return finish(recipe.idRecipe).then(response => {
        console.log(response, 'rahri')
        return response
      })
    } else {
      return res
    }
  }).catch(err => {
    return err.response.data
  })
}

function addRecipeCate(recipe) {
  let accessToken = localStorage.getItem('token')
  let headers = {
    Authorization: `Bearer ${accessToken}`,
    // 'Content-Type': 'multipart/form-data',
  }

  let body = recipe
  return callApi(
    'api/recipes/cate',
    'POST',
    body,
    headers
  ).then(res => {
    if (res.data) {
      console.log(res.data)
      return res.data
    } else {
      console.log('addRecipeCate service failure')
      return null
    }
    // return res.data
  }).catch(err => {
    if (err.response.data) {
      console.log(err.response.data, 'addRecipeCate success')
      return err.response.data
    } else {
      console.log('addRecipeCate failure')
      return null
    }
    // return err.response.data
  })
}

function finish(idRecipe) {
  let body = { idRecipe }
  let accessToken = localStorage.getItem('token')
  let headers = {
    Authorization: `Bearer ${accessToken}`,
    // 'Content-Type': 'multipart/form-data',
  }

  return callApi(
    'api/recipes',
    'POST',
    body,
    headers
  ).then(res => {
    if (res.data) {
      console.log(res.data)
      return res.data
    } else {
      console.log('null')
      return null
    }
    // return res.data
  }).catch(err => {
    if (err.response.data) {
      console.log(err.response.data)
      return err.response.data
    } else {
      console.log('err')
      return null
    }
    // return err.response.data
  })
}

function fetchRecipes(page = 1) {
  return callApi(
    `api/recipes/filter?page=${page}&records=${ITEM_PER_PAGE}`,
    // `api/blogs?page=${page}&records=${ITEM_PER_PAGE}`,
    'GET',
    null
  )
}

function fetchRecipe(_id) {
  console.log(_id, 'service fetch')
  return callApi(
    `api/recipes/id?idRecipe=${_id}`,
    // `api/blogs/id?id=${_id}`,
    'GET',
    null
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function search(keyword) {
  return callApi(
    `api/recipes/search?key=${keyword}`,
    'GET',
    null
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function getRelatedRecipe(_id) {
  return callApi(
    `api/recipes/related-recipes?idRecipe=${_id}&page=1&records=4`,
    'GET',
    null
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function filter(
  tags,
  typeRecipe,
  level,
  processingMethod,
  purpose,
  countryCuisine,
  typeOfDish,
  season
) {
  return callApi(
    `api/recipes/filter?tags=${tags}&typeRecipe=${typeRecipe}&level=${level}&processingMethod=${processingMethod}&purpose=${purpose}&countryCuisine=${countryCuisine}&typeOfDish=${typeOfDish}&season=${season}`,
    'GET',
    null
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}
import callApi from '../utils/apiCaller'

export const recipeService = {
  addRecipe
}

function addRecipe(recipe) {
  addRecipeBasicInfo(recipe)


}

function addRecipeBasicInfo(recipeBasic) {
  let formData = new FormData()
  let { title, image, shortDescription, level, time } = recipeBasic
  let accessToken = localStorage.getItem('token')

  let headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'multipart/form-data',
  }
  console.log(title, image, shortDescription, level, time)

  formData.set('title', title)
  formData.set('image', image)
  formData.set('shortDescription', shortDescription)
  formData.set('level', level)
  formData.set('time', time)

  // console.log(formData)
  console.log('form data before upload des:');
  for (const [x, y] of formData.entries()) {
    console.log(x, y);
  }

  return callApi(
    'api/recipes/basic-info',
    'POST',
    formData,
    headers
  ).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err.response.data)
  })
}

function addRecipeMaterial(material) {

}

function addRecipeStep(steps) {

}

function addRecipeFinish() {

}
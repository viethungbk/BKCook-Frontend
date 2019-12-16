import React, { useEffect } from 'react'
import ListRecipe from '../../components/container/recipe/ListRecipe'
import { useDispatch, useSelector } from 'react-redux'
import { recipeActions } from '../../actions/recipeActions'

const ListRecipeContainer = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(recipeActions.fetchRecipes())
  }, [])
  let { recipes } = useSelector(state => state.listRecipeReducer)
  return (
    <ListRecipe {...props} recipes={recipes.slice(0,4)} />
  )
}

export default ListRecipeContainer
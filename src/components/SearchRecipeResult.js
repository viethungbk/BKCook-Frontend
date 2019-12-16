import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListRecipe from './container/recipe/ListRecipe'
import { recipeActions } from '../actions/recipeActions'
import { ITEM_PER_PAGE } from '../constants/Config'

const SearchRecipeResult = () => {
  const dispatch = useDispatch()
  let { totalRecords, recipes } = useSelector(state => state.searchRecipeReducer)
  const splitRecipes = () => {
    let pageRecipe = []

    for (let i = 1; i <= Math.ceil(totalRecords / ITEM_PER_PAGE); i++) {
      let endValue = i * ITEM_PER_PAGE
      let startValue = i * ITEM_PER_PAGE - ITEM_PER_PAGE

      pageRecipe.push({
        pageNumber: i,
        recipeOfPage: recipes.slice(startValue, endValue)
      })
    }

    return pageRecipe
  }
  let pageRecipe = splitRecipes()

  let [state, setState] = useState({
    currentRecipe: totalRecords > 0 ? pageRecipe[0].recipeOfPage : 0
  })

  useEffect(() => {
    
  }, [totalRecords])

  const handlePaginate = (page) => {
    setState({
      currentRecipe: pageRecipe.filter(item => item.pageNumber === page).map(item => item.recipeOfPage)[0]
    })
  }

  

  return (
    <div className='mt-100 mb-10'>
      {
        totalRecords > 0 &&
        <ListRecipe
          title='Kết quả tìm kiếm'
          isShowFull={true} recipes={state.currentRecipe} totalRecords={totalRecords} handlePaginate={handlePaginate}
        />
      }

    </div>
  )
}

export default SearchRecipeResult
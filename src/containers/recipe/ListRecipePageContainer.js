import React, { useEffect } from 'react'
import FilterRecipe from '../../components/container/recipe/FilterRecipe'
import { useSelector, useDispatch } from 'react-redux'
import { recipeActions } from '../../actions/recipeActions'
import ListRecipe from '../../components/container/recipe/ListRecipe'
import SearchRecipeResult from '../../components/SearchRecipeResult'

const ListRecipePageContainer = () => {
  const dispatch = useDispatch()
  let { totalRecords, recipes } = useSelector(state => state.listRecipeReducer)
  let { totalRecords: searchTotalRecords } = useSelector(state => state.searchRecipeReducer)
  
  useEffect(() => {
    dispatch(recipeActions.fetchRecipes())
  }, [])

  const handlePaginate = (page) => {
    dispatch(recipeActions.fetchRecipes(page))
    console.log(page)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Công Thức</h2>
        <p>Tìm kiếm món ăn ngon mỗi ngày</p>

        <FilterRecipe />
      </div>

      <div className='row'>
        {
          searchTotalRecords > 0 ? <SearchRecipeResult /> : <ListRecipe isShowFull={true} recipes={recipes} totalRecords={totalRecords} handlePaginate={handlePaginate} />
        }
      </div>
    </div>
  )

}

export default ListRecipePageContainer
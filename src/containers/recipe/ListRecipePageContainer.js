import React, { useEffect, useState } from 'react'
import FilterRecipe from '../../components/container/recipe/FilterRecipe'
import { useSelector, useDispatch } from 'react-redux'
import { recipeActions } from '../../actions/recipeActions'
import ListRecipe from '../../components/container/recipe/ListRecipe'
import SearchRecipeResult from '../../components/SearchRecipeResult'

const ListRecipePageContainer = () => {
  const dispatch = useDispatch()
  let { totalRecords, recipes } = useSelector(state => state.listRecipeReducer)
  let { totalRecords: searchTotalRecords } = useSelector(state => state.searchRecipeReducer)
  let { totalRecords: filterTotalRecords, recipes: filterRecipes } = useSelector(state => state.filterRecipeReducer)

  useEffect(() => {
    dispatch(recipeActions.fetchRecipes())
  }, [])

  let [state, setState] = useState({
    filtered: false
  })

  const handlePaginate = (page) => {
    dispatch(recipeActions.fetchRecipes(page))
    console.log(page)
  }

  const filtered = (value) => {
    setState({ filtered: value })
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Công Thức</h2>
        <p>Tìm kiếm món ăn ngon mỗi ngày</p>

        <FilterRecipe filtered={filtered} />
      </div>
      {
        state.filtered
          ? (
              (filterTotalRecords && filterTotalRecords > 0)

                ? <ListRecipe isShowFull={true} recipes={filterRecipes} totalRecords={filterTotalRecords} handlePaginate={handlePaginate} />
                : <h5>Không tìm thấy kết quả</h5>
            )
          : (
            <div className='row'>
              {
                searchTotalRecords > 0 ? <SearchRecipeResult /> : <ListRecipe isShowFull={true} recipes={recipes} totalRecords={totalRecords} handlePaginate={handlePaginate} />
              }
            </div>
          )

      }


    </div>
  )

}

export default ListRecipePageContainer
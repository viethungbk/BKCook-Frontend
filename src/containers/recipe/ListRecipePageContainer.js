import React from 'react'
import FilterRecipe from '../../components/container/recipe/FilterRecipe'
import Pagination from '../../components/container/Pagination'
import ListRecipeContainer from './ListRecipeContainer'

class RecipeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Công Thức</h2>
          <p>Tìm kiếm món ăn ngon mỗi ngày</p>

          <FilterRecipe />
        </div>

        <div className='row'>
          <ListRecipeContainer isShowFull={true} />
          <br />
          <Pagination totalItem={13} />
        </div>
      </div>
    )
  }
}

export default RecipeContainer
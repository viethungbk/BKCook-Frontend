import React from 'react'
import ListRecipe from '../../components/container/recipe/ListRecipe'

class ListRecipeContainer extends React.Component {
  render() {
    return (
      <ListRecipe {...this.props}></ListRecipe>
    )
  }
}

export default ListRecipeContainer
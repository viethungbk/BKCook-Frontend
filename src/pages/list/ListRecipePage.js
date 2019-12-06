import React from 'react'
import ListRecipePageContainer from '../../containers/recipe/ListRecipePageContainer'

class ListRecipePage extends React.Component {
  render() {
    return (
      <div className='container mt-100'>
        <ListRecipePageContainer />
      </div>
    )
  }
}

export default ListRecipePage;
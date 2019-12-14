import React from 'react'
import ListRecipePageContainer from '../../containers/recipe/ListRecipePageContainer'
import Layout from '../../components/Layout'

class ListRecipePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='container mt-100'>
          <ListRecipePageContainer />
        </div>
      </Layout>
    )
  }
}

export default ListRecipePage;
import React from 'react'
import ListBlogPageContainer from '../../containers/blog/ListBlogPageContainer'
import BreadcrumbsContainer from '../../containers/BreadcrumbsContainer'

class ListBlogPage extends React.Component {
  render() {
    return (
      <div className='container mt-100'>
        <div className='row'>
          <BreadcrumbsContainer />
        </div>
        <br />
        <ListBlogPageContainer {...this.props} />
      </div>
    )
  }
}

export default ListBlogPage;
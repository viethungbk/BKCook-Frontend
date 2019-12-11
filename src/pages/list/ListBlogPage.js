import React from 'react'
import ListBlogPageContainer from '../../containers/blog/ListBlogPageContainer'
import Breadcrumbs from '../../components/container/Breadcrumbs'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blogs' }
]

class ListBlogPage extends React.Component {
  render() {
    return (
      <div className='container mt-100'>
        {/* <div className='row'>
          <Breadcrumbs pages={pages} />
        </div>
        <br /> */}
        <ListBlogPageContainer {...this.props} />
      </div>
    )
  }
}

export default ListBlogPage;
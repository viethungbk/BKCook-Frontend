import React from 'react'
import ListBlogPageContainer from '../../containers/blog/ListBlogPageContainer'
import Breadcrumbs from '../../components/container/Breadcrumbs'
import Layout from '../../components/Layout'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blogs' }
]

class ListBlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='container mt-100'>
          <ListBlogPageContainer {...this.props} />
        </div>
      </Layout>

    )
  }
}

export default ListBlogPage;
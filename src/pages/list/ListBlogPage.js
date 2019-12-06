import React from 'react';
import Breadcrumbs from '../../components/container/Breadcrumbs';
import ListBlogPageContainer from '../../containers/blog/ListBlogPageContainer';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' }
]

class ListBlogPage extends React.Component {
  render() {
    return (
      <div className='container mt-100'>
        <div className='row'>
          <Breadcrumbs pages={pages} />
        </div>
        <br />
        <ListBlogPageContainer {...this.props} />
      </div>
    )
  }
}

export default ListBlogPage;
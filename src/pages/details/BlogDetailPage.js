import React from 'react'
import Breadcrumbs from '../../components/container/Breadcrumbs'
import SearchBlog from '../../components/container/blog/SearchBlog'
import TopBlogContainer from '../../containers/blog/TopBlogContainer'
import BlogDetailPageContainer from '../../containers/blog/BlogDetailPageContainer'

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' }
]

class BlogDetailPage extends React.Component {
  render() {
    let { blogId } = this.props.match.params

    return (
      <div className='container mt-100'>
        <div className='row'>
          <Breadcrumbs pages={pages} />
        </div>
        <br />
        <div className='row'>
          <div className='col-md-8'>
            <h4>Blog</h4>
            <hr />
            <BlogDetailPageContainer blogId={blogId} />
            {/* <ListBlog blogs={currentBlog} totalBlog={totalBlog} paginate={this.paginate} match={match} /> */}
          </div>
          <div className='col-md-4'>
            <h4>Bài viết nổi bật</h4>
            <hr />

            <SearchBlog />
            <TopBlogContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogDetailPage
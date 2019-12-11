import React from 'react'
import SearchBlog from '../../components/container/blog/SearchBlog'
import TopBlogContainer from '../../containers/blog/TopBlogContainer'
import BlogDetailPageContainer from '../../containers/blog/BlogDetailPageContainer'

class BlogDetailPage extends React.Component {
  render() {
    let { blogId } = this.props.match.params
    console.log(blogId)

    return (
      <div className='container mt-100'>
        <BlogDetailPageContainer blogId={blogId} />
        {/* <div className='row'>
          <div className='col-md-8'>
            <BlogDetailPageContainer blogId={blogId} />
          </div>
          <div className='col-md-4'>
            <h4>Bài viết nổi bật</h4>
            <hr />

            <SearchBlog />
            <TopBlogContainer />
          </div>
        </div> */}
      </div>
    )
  }
}

export default BlogDetailPage
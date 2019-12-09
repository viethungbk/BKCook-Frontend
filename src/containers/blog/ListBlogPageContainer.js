import React from 'react'
import { connect } from 'react-redux'
import ListBlog from '../../components/container/blog/ListBlog'
import SearchBlog from '../../components/container/blog/SearchBlog'
import { actFetchPostsRequest } from '../../actions/index'
import TopBlogContainer from './TopBlogContainer'

class BlogContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentBlog()
  }
  paginate = (page) => {
    console.log(page)
    // đã lấy được số trang, chỉ cần dispatch action để lấy được bài viết cần thiết/
  }
  render() {
    let { blogReducer, match } = this.props
    let { totalRecords, currentBlogs, topBlog } = blogReducer

    return (
      <div className='row'>
        <div className='col-md-8'>
          <h4>Blog</h4>
          <hr />
          <ListBlog blogs={currentBlogs} totalBlog={totalRecords} paginate={this.paginate} match={match} />
        </div>
        <div className='col-md-4'>
          <h4>Bài viết nổi bật</h4>
          <hr />

          <SearchBlog />
          <TopBlogContainer topBlog={topBlog} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer
  }
}

const mapDispatchToProps = (dispath, props) => {
  return {
    fetchCurrentBlog: (page) => {
      dispath(actFetchPostsRequest(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)
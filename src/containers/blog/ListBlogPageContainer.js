import React from 'react'
import { connect } from 'react-redux'
import ListBlog from '../../components/container/blog/ListBlog'
import SearchBlog from '../../components/container/blog/SearchBlog'
import TopBlogContainer from './TopBlogContainer'
import Breadcrumbs from '../../components/container/Breadcrumbs'
import { blogActions } from '../../actions/blogActions'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blogs' }
]

class BlogContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchCurrentBlog()
    this.props.fetchBlogs()
  }
  paginate = (page) => {
    console.log(page)
    // đã lấy được số trang, chỉ cần dispatch action để lấy được bài viết cần thiết/
  }
  render() {
    let { blogReducer, match } = this.props
    let { totalRecords, blogs, topBlog } = blogReducer

    return (
      <div>
        <div className='row'>
          <Breadcrumbs pages={pages} />
        </div>
        <br />
        <div className='row'>
          <div className='col-md-8'>
            <h4>Blog</h4>
            <hr />
            <ListBlog blogs={blogs} totalBlog={totalRecords} paginate={this.paginate} match={match} />
          </div>
          <div className='col-md-4'>
            <h4>Bài viết nổi bật</h4>
            <hr />
            <SearchBlog />
            <TopBlogContainer topBlog={topBlog} />
          </div>
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
    fetchBlogs: page => {
      dispath(blogActions.fetchBlogs(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)
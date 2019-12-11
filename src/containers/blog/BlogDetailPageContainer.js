import React from 'react'
import { connect } from 'react-redux'
import { API_URL } from '../../constants/Config'
import Breadcrumbs from '../../components/container/Breadcrumbs'
import { actFetchPostRequest } from '../../actions/index'
import SearchBlog from '../../components/container/blog/SearchBlog'
import TopBlogContainer from './TopBlogContainer'

class BlogDetailPageContainer extends React.Component {
  componentDidMount() {
    let { blogId } = this.props
    this.props.fetchBlog(blogId)
  }
  render() {
    let { currentBlog } = this.props
    let pages = [
      { label: 'Home', to: '/' },
      { label: 'Blog', to: '/blogs' },
      { label: currentBlog.title }
    ]
    let { title, image, description } = currentBlog
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
            <div>
              <div className="card">
                <div className="card-header">
                  <h1>{title}</h1>
                </div>
                <img src={`${API_URL}${image}`} className="card-img-top" alt={title} />
                <div className="card-body">
                  <p className="card-text">{description}</p>
                </div>
              </div>

              {/* form */}
              <form action="/action_page.php" className='mt-4 mb-4'>
                <div className="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
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

const mapStateToProps = state => {
  return {
    currentBlog: state.currentBlogReducer
  }
}

const mapDispathToProps = (dispatch, props) => {
  return {
    fetchBlog: (_id) => {
      dispatch(actFetchPostRequest(_id))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(BlogDetailPageContainer)
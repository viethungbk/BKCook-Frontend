import React from 'react'
import { connect } from 'react-redux'
import { actFetchPost } from '../../actions/index'
import { API_URL } from '../../constants/Config'

class BlogDetailPageContainer extends React.Component {
  componentDidMount() {
    let { blogId } = this.props
    this.props.fetchBlog(blogId)
  }
  render() {
    let { currentBlog } = this.props
    console.log(currentBlog)
    let { title, image, description } = currentBlog
    return (
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

    )
  }
}

const mapStateToProps = state => {
  return {
    currentBlog: state.blogReducer.currentBlog
  }
}

const mapDispathToProps = (dispatch, props) => {
  return {
    fetchBlog: (_id) => {
      dispatch(actFetchPost(_id))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(BlogDetailPageContainer)
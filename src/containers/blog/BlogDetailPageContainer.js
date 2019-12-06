import React from 'react'
import { connect } from 'react-redux'

class BlogDetailPageContainer extends React.Component {
  render() {
    let { currentBlog } = this.props
    let { name, image, description } = currentBlog
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h1>{name}</h1>
          </div>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>

        {/* form */}
        <form action="/action_page.php" className='mt-4 mb-4'>
          <div className="form-group">
            <label for="comment">Comment:</label>
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
    currentBlog: state.currentBlogReducer
  }
}

export default connect(mapStateToProps, null)(BlogDetailPageContainer)
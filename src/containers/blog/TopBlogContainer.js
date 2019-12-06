import React from 'react'
import { connect } from 'react-redux'
import ListTopBlog from '../../components/container/blog/ListTopBlog'

class TopBlogContainer extends React.Component {
  render() {
    let { topBlog } = this.props
    return (
      <ListTopBlog topBlog={topBlog}></ListTopBlog>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topBlog: state.topBlogReducer
  }
}

export default connect(mapStateToProps, null)(TopBlogContainer)
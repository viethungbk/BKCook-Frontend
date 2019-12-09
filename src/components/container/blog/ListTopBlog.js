import React from 'react'
import ItemTopBlog from './ItemTopBlog'
import { showListItem } from '../../../actions/function'

class ListTopBlog extends React.Component {
  render() {
    let { title, topBlog } = this.props;
    return (
      <ul className="list-unstyled">
        {/* {this.renderListTop()} */}
        {showListItem(topBlog, ItemTopBlog)}
      </ul>
    )
  }
}

export default ListTopBlog;
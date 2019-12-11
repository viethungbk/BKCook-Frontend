import React from 'react'
import ItemTopBlog from './ItemTopBlog'
import { showListItem } from '../../../actions/function'

class ListTopBlog extends React.Component {
  render() {
    let { topBlog } = this.props;
    return (
      <ul className="list-unstyled">
        {showListItem(topBlog, ItemTopBlog)}
      </ul>
    )
  }
}

export default ListTopBlog;
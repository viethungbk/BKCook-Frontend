import React from 'react';
import ItemBlog from './ItemBlog';
import Pagination from '../Pagination';
import { showListItem } from '../../../actions/function';

class ListBlog extends React.Component {
  render() {
    let { totalBlog, blogs, paginate, match } = this.props;
    let { url } = match;

    return (
      <div>
        <div className='row'>
          {showListItem(blogs, ItemBlog)}
        </div>
        <Pagination totalItem={totalBlog} paginate={paginate} paginateFor={url} />
      </div>

    )
  }
}

export default ListBlog;
import React from 'react';
import { ITEM_PER_PAGE } from '../../constants/Config';
import { NavLink } from 'react-router-dom';

class Pagination extends React.Component {
  showPagination = () => {
    let { totalItem, paginateFor } = this.props;
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItem / ITEM_PER_PAGE); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((page, index) => {
      return (
        <li key={index} className='page-item'>
          <NavLink 
            className='page-link' 
            to={`${paginateFor}?page=${page}&records=${ITEM_PER_PAGE}`} 
            onClick={() => this.handlePaginate(page)}
          >
            {page}
          </NavLink>
          
        </li>
      )
    })
  }
  handlePaginate = (page) => {
    this.props.handlePaginate(page);
  }
  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          {this.showPagination()}
        </ul>
      </nav>
    )
  }
}

export default Pagination;
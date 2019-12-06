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
          <NavLink className='page-link' to={`${paginateFor}?page=${page}&records=${ITEM_PER_PAGE}`} onClick={() => this.paginate(page)}>{page}</NavLink>
        </li>
      )
    })
  }
  paginate = (page) => {
    this.props.paginate(page);
  }
  render() {
    return (
      <nav aria-label="...">
        <ul className="pagination">
          {/* <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
          </li> */}

          {this.showPagination()}
          {/* <li className="page-item">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item" aria-current="page">
            <a className="page-link" href="#">2 </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li> */}

          {/* <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li> */}
        </ul>
      </nav>
    )
  }
}

export default Pagination;
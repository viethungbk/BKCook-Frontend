import React from 'react';
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../constants/Config'

class ItemBlog extends React.Component {
  render() {
    let { _id, title, image, description } = this.props.item;

    return (
      <div className='col-sm-12 col-md-6 col-lg-4 mb-2'>
        <div className="card">
          <img src={`${API_URL}${image}`} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">
              <NavLink to={`/blog/${_id}`}>{title}</NavLink>
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemBlog;
import React from 'react';
import { NavLink } from 'react-router-dom'

class ItemBlog extends React.Component {
  render() {
    let { id, name, image, description } = this.props.item;
    return (
      <div className='col-sm-12 col-md-6 col-lg-4 mb-2'>
        <div className="card">
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">
              <NavLink to={`/blog/${id}`}>{name}</NavLink>
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemBlog;
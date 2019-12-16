import React from 'react'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../constants/Config'

class ItemTopBlog extends React.Component {
  render() {
    let { _id, title, image, description } = this.props.item
    return (
      <li className="media my-4">
        <img src={`${API_URL}/${image}`} className="card-img mr-3" alt={title} style={{width: '100px', height: '100px'}} />
        <div className="media-body">
          <h6 className="mt-0 mb-1">
            <NavLink to={`/blogs/${_id}`}>{title}</NavLink>
          </h6>
          <p>{description}</p>
        </div>
      </li>
    )
  }
}

export default ItemTopBlog
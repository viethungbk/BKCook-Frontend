import React from 'react'
import { NavLink } from 'react-router-dom'

class ItemTopBlog extends React.Component {
  render() {
    let { id, name, image, description } = this.props.item
    return (
      <li className="media my-4">
        <img src={image} className="mr-3 img-rounded" alt={name} />
        <div className="media-body">
          <h6 className="mt-0 mb-1">
            <NavLink to={`/blog/${id}`}>{name}</NavLink>
          </h6>
          <p>{description}</p>
        </div>
      </li>
    )
  }
}

export default ItemTopBlog
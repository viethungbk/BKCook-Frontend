import React from 'react';
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../constants/Config';

class ItemRecipe extends React.Component {
  render() {
    let { _id, title, image, time, view } = this.props.item;
    // let { authorName } = author

    let { isShowFull } = this.props
    let class_name = isShowFull ? 'col-sm-12 col-md-6 col-lg-3' : 'col-sm-12 col-md-6 col-lg-6';
    return (
      <div className={`${class_name} mb-2`}>
        <div className="card">
          <img src={`${API_URL}/${image}`} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">
              <NavLink to={`/recipe/${_id}`}>{title}</NavLink>
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className='fa fa-clock-o' />{time}
              </li>
              <li className="list-inline-item">
                <span className='fa fa-bar-chart' />{view}
              </li>
            </ul>
            <p>đăng bởi: <b><NavLink to={`/author/authorURLKEY`}>Test</NavLink></b></p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemRecipe;
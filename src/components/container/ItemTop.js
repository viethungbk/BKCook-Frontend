import React from 'react';

class ItemTop extends React.Component {
  render() {
    let { name, link, imageLink, description } = this.props;
    return (
      <div className="member-item-wrapper">
        <div className="member-item">
          <div className="member-profile nopadding">
            <div className="avatar z-effect">
              <img src={imageLink} className="img-responsive img-circle" />
            </div>
            <div className="profile">
              <a href={link} className="cooky-user-link name">{name}</a>
              <div className="stats">
                <span className="stats-item">{description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemTop;
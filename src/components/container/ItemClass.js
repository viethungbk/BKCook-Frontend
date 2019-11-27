import React from 'react';

class ItemClass extends React.Component {
  render() {
    let { name, link, imageLink, location, time } = this.props;
    return (
      <div className="item">
        <div className="item-inner">
          <div className="item-photo">
            <a href={link} target="_self">
              <img alt={name} className="lazy img-responsive" src={imageLink} style={{ display: 'block' }} />
            </a>
          </div>
          <div className="item-info">
            <div className="item-header">
              <div className="title">
                <a href={link} target="_self">
                  <h3>{name}</h3>
                </a>
              </div>
            </div>
            <div className="event-calendar">
              <div className="location">{location}</div>
              <div className="date">{time}</div>
            </div>
          </div>
          <div className="register">
            <a className="btn btn-orange" href={link} target="_self">
              <i className="fa fa-hand-o-right" />
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemClass;
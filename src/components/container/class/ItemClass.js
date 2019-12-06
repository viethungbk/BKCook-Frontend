import React from 'react';

class ItemClass extends React.Component {
  render() {
    let { name, link, imageLink, location, time } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={imageLink} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="media">
            <div className="media-body">
              <p className="card-text"><small className="text-muted">TP. HCM 04/12/2019 14:00 CH</small></p>
            </div>
            <a href="#" className="btn btn-outline-warning">
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
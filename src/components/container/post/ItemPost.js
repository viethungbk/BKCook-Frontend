import React from 'react';

class ItemPost extends React.Component {
  render() {
    let { post } = this.props
    let { title, image, description, author, created } = post;

    return (
      <div className="col-sm-6 col-md-6">
        <div className="thumbnail">
          <img className='img-rounded' src={image} alt="Test" />
          <div className="caption">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href='#'>Xem thêm</a>
            <br />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <span className="glyphicon glyphicon-time" aria-hidden="true" />{created}
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{author}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemPost;
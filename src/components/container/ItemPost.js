import React from 'react';

class ItemPost extends React.Component {
  render() {
    let { name, link, imageLink, category, view } = this.props;
    let { categoryName, categoryLink } = category;
    return (
      <div className="item">
        <div className="inner">
          <a href={link} className="photo">
            <div className="item-img-effect">
              <img alt={name} className="lazy img-responsive effect" src={imageLink} />
            </div>
          </a>
          <section className="item-content">
            <h3 className="title">
              <a href={link}>{name}</a>
            </h3>
            <div className="item-stats-bar">
              <ul className="list-inline">
                <li>
                  <a title="Mục" href={categoryLink} className="cat-bar">{categoryName}</a>
                  <span className="abbrnum">{view}</span> <span className="stats-text">lượt xem</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ItemPost;
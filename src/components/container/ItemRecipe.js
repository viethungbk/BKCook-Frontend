import React from 'react';

class ItemRecipe extends React.Component {
  renderAuthor(author) {
    if (author === null) {
      return '';
    }

    let { authorName, authorLink } = author;
    return (
      <div className="item-header">
        <div className="hprofile">
          <div className="profile">
            <span className="postedby-text">
              công thức bởi:
                </span>
            <a href={authorLink} className="name">{authorName}</a>
          </div>
        </div>
      </div>
    );
  }
  render() {
    let { name, link, imageLink, author, timeToDo, view } = this.props;
    return (
      <div className={author !== null ? 'today-recipe-user' : 'today-recipe'}>
        <div className="item-block recipe-block">
          <div className="item-content">
            <div className="featured-recipe-item">
              <div className="recipe-photo">
                <a href={link} className="photo">
                  <img alt={name} className="lazy img-responsive" src={imageLink} style={{ display: 'block' }} />
                </a>
              </div>
              <div className="item-info-box">
                <h3 className="title">
                  <a href={link} title={name}>{name}</a>
                </h3>
                <div className="stats">
                  <ul className="list-inline nomargin">
                    <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count">{timeToDo}</span></li>

                    <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count">{view}</span> xem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {this.renderAuthor(author)}
        </div>
      </div>
    );
  }
}

export default ItemRecipe;
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
    let { name, link, imageLink, author, timeToDo, view, typeRecipe } = this.props.item;
    let { isShowFull } = this.props
    let class_name = isShowFull ? 'col-sm-12 col-md-6 col-lg-3' : 'col-sm-12 col-md-6 col-lg-6';
    return (
      <div className={`${class_name} mb-2`}>
        <div className="card">
          <img src={imageLink} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className='fa fa-clock-o' />{timeToDo}
              </li>
              <li className="list-inline-item">
                <span className='fa fa-bar-chart' />{view}
              </li>
            </ul>
            <p>đăng bởi: <b><a href='#'>{author.authorName}</a></b></p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemRecipe;
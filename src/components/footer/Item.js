import React from 'react';

class Item extends React.Component {
  render() {
    let { name, count } = this.props;
    return (
      <div className="top-course-item">
        <a href="/cach-lam/mon-khai-vi-c1" target="_blank" className="mon-khai-vi">
          <span className="fa fa-folder-o text-gray" />
          <span>{name}</span>
          <span className="text">(<span className="count">{count}</span>)</span>
        </a>
      </div>
    )
  }
}

export default Item;
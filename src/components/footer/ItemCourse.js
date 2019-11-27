import React from 'react';
import Item from './Item';

class ItemCourse extends React.Component {
  renderCourse(course) {
    return course.map((item, key) => {
      let { name, count } = item;
      return (
        <Item
          key={key}
          name={name}
          count={count}
        />
      );
    })
  }

  render() {
    let { title, course } = this.props;
    return (
      <div className="top-course-list">
        <div className="top-course-header">
          <h3>{title}</h3>
        </div>
        {this.renderCourse(course)}
        <div className="top-course-item">
          <a href="/cach-lam" target="_blank" className="other">
            Xem thêm
            <span className="text">
              <span className="fa fa-angle-double-right" />
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default ItemCourse;
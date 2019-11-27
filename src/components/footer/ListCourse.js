import React from 'react';
import ItemCourse from './ItemCourse';

const listCourse = [
  {
    title: 'Công thức',
    course: [
      { name: 'Món khai vị', count: 3476 },
      { name: 'Món tráng miệng', count: 3476 },
      { name: 'Món chay', count: 3476 },
      { name: 'Món chính', count: 3476 }
    ]
  },
  {
    title: 'Công thức',
    course: [
      { name: 'Món khai vị', count: 3476 },
      { name: 'Món tráng miệng', count: 3476 },
      { name: 'Món chay', count: 3476 },
      { name: 'Món chính', count: 3476 }
    ]
  },
  {
    title: 'Công thức',
    course: [
      { name: 'Món khai vị', count: 3476 },
      { name: 'Món tráng miệng', count: 3476 },
      { name: 'Món chay', count: 3476 },
      { name: 'Món chính', count: 3476 }
    ]
  },
  {
    title: 'Công thức',
    course: [
      { name: 'Món khai vị', count: 3476 },
      { name: 'Món tráng miệng', count: 3476 },
      { name: 'Món chay', count: 3476 },
      { name: 'Món chính', count: 3476 }
    ]
  }
];

class ListCourse extends React.Component {
  renderListCourse() {
    return listCourse.map((item, key) => {
      let { title, course } = item;
      return (
        <ItemCourse
          key={key}
          title={title}
          course={course}
        />
      );
    });
  }
  render() {
    return (
      <div className="wide-box">
        <div className="top-course-box">
          <div className="container">
            
            {this.renderListCourse()}
          </div>
        </div>
      </div>
    )
  }
}

export default ListCourse;
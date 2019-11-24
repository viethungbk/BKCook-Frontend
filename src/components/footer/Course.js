import React from 'react';

function Course(props) {
  let { name, link, icon, count } = props;
  return (
    <div className="top-course-item">
      <a href={link} target="_blank" className="mon-khai-vi">
        <span className={icon} />
        <span> {name} </span>
        <span className="text">(<span className="count">{count}</span>)</span>
      </a>
    </div>
  );
}

export default Course;
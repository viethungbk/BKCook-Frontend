import React from 'react';
import Course from './Course';

class ListCourse extends React.Component {
  render() {
    return (
      <div className="top-course-list">
        <div className="top-course-header">
          <h3>Công thức</h3>
        </div>
        <div className="top-course-item">
          <a href="/cach-lam/mon-khai-vi-c1" target="_blank" className="mon-khai-vi">
            <span className="fa fa-folder-o text-gray" />
            <span> Món khai vị </span>
            <span className="text">(<span className="count">3473</span>)</span>
          </a>
        </div>
        <div className="top-course-item">
          <a href="/cach-lam/mon-trang-mieng-c2" target="_blank" className="mon-khai-vi">
            <span className="fa fa-folder-o text-gray" />
            <span> Món tráng miệng </span>
            <span className="text">(<span className="count">4841</span>)</span>
          </a>
        </div>
        <div className="top-course-item">
          <a href="/cach-lam/mon-chay-c3" target="_blank" className="mon-khai-vi">
            <span className="fa fa-folder-o text-gray" />
            <span> Món chay </span>
            <span className="text">(<span className="count">1084</span>)</span>
          </a>
        </div>
        <div className="top-course-item">
          <a href="/cach-lam/mon-chinh-c4" target="_blank" className="mon-khai-vi">
            <span className="fa fa-folder-o text-gray" />
            <span> Món chính </span>
            <span className="text">(<span className="count">13405</span>)</span>
          </a>
        </div>
        <div className="top-course-item">
          <a href="/cach-lam" target="_blank" className="other">
            Xem thêm
                      <span className="text">
              <span className="fa fa-angle-double-right" />
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default ListCourse;
import React from 'react';
import Class from './Class';

const classes = [
  {
    name: 'Lớp Học Làm Bánh: Christmas Fruit Cake',
    type: 'Làm Bánh',
    link: '/lop-hoc-nau-an/lop-hoc-lam-banh-christmas-fruit-cake-118',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c118.jpg',
    location: 'TP. HCM',
    dateTime: { date: '21/11/2019', time: '17:00 CH' }
  },
  {
    name: 'Lớp Học Nấu Ăn: Sườn Nướng Sốt BBQ',
    type: 'Món nướng',
    link: '/lop-hoc-nau-an/lop-hoc-nau-an-suon-nuong-sot-bbq-141',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c141.jpg',
    location: 'TP. HCM',
    dateTime: { date: '21/11/2019', time: '17:00 CH' }
  },
  {
    name: 'Lớp Học Làm Bánh: Bánh Mì Dừa Nho',
    type: 'Làm Bánh',
    link: '/lop-hoc-nau-an/lop-hoc-lam-banh-banh-mi-dua-nho-249',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c249.jpg',
    location: 'TP. HCM',
    dateTime: { date: '23/11/2019', time: '09:00 SA' }
  }
];

class ListClass extends React.Component {
  renderListClass() {
    return classes.map(item => {
      let { name, type, link, imageLink, location, dateTime } = item;
      return (
        <Class
          name={name} 
          type={type} 
          link={link} 
          imageLink={imageLink} 
          location={location} 
          dateTime={dateTime}
        />
      );
    });
  }

  render() {
    return (
      <div className="wide-box wide-box-white home-top-box">
        <div className="container">
          <div className="headline">
            <h2>
              Lớp học nấu ăn đang diễn ra
            </h2>
            <span className="desc">
              Hãy cùng tham gia và trải nghiệm các lớp học nấu ăn
            </span>
          </div>
          <div className="home-class">
            <div className="class-list">
              {this.renderListClass(classes)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListClass;
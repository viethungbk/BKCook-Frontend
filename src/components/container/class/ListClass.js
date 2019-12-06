import React from 'react';
import ItemClass from './ItemClass';

const listClass = [
  {
    name: 'Lớp Học Làm Bánh: Christmas Fruit Cake',
    link: '/lop-hoc-nau-an/lop-hoc-lam-banh-christmas-fruit-cake-118',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c118.jpg',
    location: 'TP.HCM',
    time: '21/11/2019 17:00 CH'
  },
  {
    name: 'Lớp Học Làm Bánh: Christmas Fruit Cake',
    link: '/lop-hoc-nau-an/lop-hoc-lam-banh-christmas-fruit-cake-118',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c118.jpg',
    location: 'TP.HCM',
    time: '21/11/2019 17:00 CH'
  },
  {
    name: 'Lớp Học Làm Bánh: Christmas Fruit Cake',
    link: '/lop-hoc-nau-an/lop-hoc-lam-banh-christmas-fruit-cake-118',
    imageLink: 'https://media.cooky.vn/cookingclass/s360x130/cooky-cookingclass-cover-c118.jpg',
    location: 'TP.HCM',
    time: '21/11/2019 17:00 CH'
  }
]
class ListClass extends React.Component {
  renderListClass() {
    return listClass.map((elmClass, key) => {
      let { name, link, imageLink, location, time } = elmClass;
      return (
        <ItemClass
          key={key}
          name={name}
          link={link}
          imageLink={imageLink}
          location={location}
          time={time}
        />
      );
    });
  }

  render() {
    let { title, description } = this.props;
    return (
      <div className="container mt-10">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h6 className="card-subtitle mb-4 text-muted">{description}</h6>
            <div className="card-deck">
              {this.renderListClass()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ListClass;
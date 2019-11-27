import React from 'react';
import ItemTop from './ItemTop';

const items = [
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  },
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  },
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  },
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  },
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  },
  {
    name: 'Bích Châu Đào',
    link: '/thanh-vien/anhquan22032006',
    imageLink: 'https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg',
    description: '39 Công thức 2023 Quan tâm'
  }
]

class ListTop extends React.Component {
  renderListTop() {
    return items.map((item, key) => {
      let { name, link, imageLink, description } = item;
      return (
        <ItemTop
          key={key}
          name={name} link={link} imageLink={imageLink} description={description}
        />
      );
    })
  }
  render() {
    let { title } = this.props;
    return (
      <div className="home-top-box top-ranking-members">
        <div className="headline">
          <h2>
            {title}
          </h2>
        </div>
        <div className="ranking-members-list" style={{ opacity: 1 }}>
          <div className="member-list topchef-list row10">
            {this.renderListTop()}
          </div>
          <a className="btn-more" href="/thanh-vien" target="_blank">Top thành viên »</a>
        </div>
      </div>
    )
  }
}

export default ListTop;
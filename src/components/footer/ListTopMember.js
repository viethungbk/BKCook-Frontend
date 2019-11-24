import React from 'react';
import TopMember from './TopMember';

const listMember = [
  {
    name: 'Giang Nguyen', 
    link: '/thanh-vien/quanmanhmultiply', 
    imageLink: 'https://media.cooky.vn/usr/g12/110264/avt/c80x80/cooky-avatar-636577716242477667.jpg', 
    recipe: '120'
  },
  {
    name: 'Dũng Trịnh Tuấn', 
    link: '/thanh-vien/dung_tuan7062', 
    imageLink: 'https://media.cooky.vn/usr/g17/160870/avt/c80x80/cooky-avatar-636813604304807418.JPG', 
    recipe: '102'
  },
  {
    name: 'Trà My Nguyễn Nguyễn', 
    link: '/thanh-vien/nttmyct', 
    imageLink: 'https://media.cooky.vn/usr/g14/139637/avt/c80x80/cooky-avatar-636730072181231687.JPG', 
    recipe: '95'
  },
  {
    name: 'Nguyen Thi Ngoc Diep', 
    link: '/thanh-vien/Diepngoc%20Nguyen', 
    imageLink: 'https://media.cooky.vn/usr/g21/205942/avt/c80x80/cooky-avatar-636870187842720174.jpg', 
    recipe: '86'
  },
  {
    name: 'Hồng Ân Lê', 
    link: '/thanh-vien/hatrang1406', 
    imageLink: 'https://media.cooky.vn/usr/g10/91652/avt/c80x80/cooky-avatar-636836788417873862.jpg', 
    recipe: '82'
  },
  {
    name: 'Cherry Phạm', 
    link: '/thanh-vien/ptkngan251', 
    imageLink: 'https://media.cooky.vn/usr/g14/131315/avt/c80x80/cooky-avatar-636684863375091503.JPG', 
    recipe: '76'
  },
  {
    name: 'Cười  Khúc Khích', 
    link: '/thanh-vien/buitrongkhiem2010', 
    imageLink: 'https://media.cooky.vn/usr/g6/53266/avt/c80x80/cooky-avatar-636310008286569268.png', 
    recipe: '75'
  },
  {
    name: 'Bảo Nhii', 
    link: '/thanh-vien/nguyenlbnhii', 
    imageLink: 'https://media.cooky.vn/usr/g11/109360/avt/c80x80/cooky-avatar-636651746311521065.jpg', 
    recipe: '71'
  },
  {
    name: 'Hoàng Oanh', 
    link: '/thanh-vien/hoangoanh1976', 
    imageLink: 'https://media.cooky.vn/usr/g16/150077/avt/c80x80/cooky-avatar-636846610693292717.JPG', 
    recipe: '68'
  },
  {
    name: 'Lan Anh Thái Lê', 
    link: '/thanh-vien/lananhthai', 
    imageLink: 'https://media.cooky.vn/usr/g16/151350/avt/c80x80/cooky-avatar-636978782920374451.jpg', 
    recipe: '66'
  }
];

class ListTopMember extends React.Component {
  renderListTopMember() {
    return listMember.map(member => {
      let { name, link, imageLink, recipe } = member;
      return (
        <TopMember name={name} link={link} imageLink={imageLink} recipe={recipe} />
      );
    });
  }
  render() {
    return (
      <div className="top-member-list">
        {this.renderListTopMember()}
        <div className="top-member top-member-more">
          <a className="avt" target="_blank" href="/thanh-vien">
            <span className="fa fa-user-o" />
          </a>
          <a style={{ fontSize: '12px', color: '#b2b2b2', padding: '10px 0', display: 'block' }} target="_blank" href="/thanh-vien">Thành viên</a>
        </div>
      </div>
    );
  }
}

export default ListTopMember;
import React from 'react';
import ListMember from './member/ListMember';
import ListRecipe from './recipe/ListRecipe';

class MainContent extends React.Component {
  render() {
    return (
      <div className="wide-box wide-box-white ">
        <div className="container">
          <div className="dining-recipes-box home-top-recipes home-top-box">
            <div className="headline">
              <h2>
                Công thức từ cộng đồng
              </h2>
            </div>
            <div className="row recipes-list row10">
              <ListRecipe />
            </div>
          </div>
          <div className="home-top-box top-ranking-members">
            <div className="headline">
              <h2>
                TOP THÀNH VIÊN
              </h2>
            </div>
            <div className="ranking-members-list" style={{ opacity: 1 }}>
              <ListMember />
              <a className="btn-more" href="/thanh-vien" target="_blank">Top thành viên »</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
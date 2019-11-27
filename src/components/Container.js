import React from 'react';
import Banner from './container/Banner';
import ListClass from './container/ListClass';
import ListRecipe from './container/ListRecipe';
import ListPost from './container/ListPost';
import ListTop from './container/ListTop';

class Container extends React.Component {
  render() {
    return (
      <div className="home-body-container ng-scope" ng-app="cookyHomeApp" ng-controller="homeController">
        <Banner />
        
        <ListClass title='LỚP HỌC NẤU ĂN ĐANG DIỄN RA' description='Hãy cùng tham gia và trải nghiệm các lớp học nấu ăn' />
        <div className="wide-box wide-box-white ">
          <div className="container">
            <ListRecipe title='CÔNG THỨC TỪ CỘNG ĐỒNG' typeRecipe={1} />
            <ListTop title="TOP THÀNH VIÊN" />
          </div>
        </div>
        
        <div className="wide-box wide-box-white">
          <div className="container">
            <ListRecipe title='CÔNG THỨC BỞI COOKY' typeRecipe={0} />
          </div>
        </div>

        <ListPost />
      </div>
    );
  }
}

export default Container;
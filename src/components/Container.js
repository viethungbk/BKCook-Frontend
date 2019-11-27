import React from 'react';
import Banner from './container/Banner';
import ListClass from './container/ListClass';
import ListRecipe from './container/ListRecipe';
import ListPost from './container/ListPost';

class Container extends React.Component {
  render() {
    return (
      <div className="home-body-container ng-scope" ng-app="cookyHomeApp" ng-controller="homeController">
        <Banner />
        
        <ListClass title='LỚP HỌC NẤU ĂN ĐANG DIỄN RA' description='Hãy cùng tham gia và trải nghiệm các lớp học nấu ăn' />
        <div className="wide-box wide-box-white ">
          <div className="container">
            <ListRecipe title='CÔNG THỨC TỪ CỘNG ĐỒNG' typeRecipe={1} />
            <div className="home-top-box top-ranking-members">
              <div className="headline">
                <h2>
                  TOP THÀNH VIÊN
                </h2>
              </div>
              <div className="ranking-members-list" style={{ opacity: 1 }}>
                <div className="member-list topchef-list row10">
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum1">1</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g25/243011/avt/c60x60/cooky-avatar-636924781866635720.jpg" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/anhquan22032006" className="cooky-user-link name" data-userid={243011}> Bích Châu Đào</a>
                          <span className="stats-text user-lvl cookee ">cookee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">39</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">2023</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={243011} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum2">2</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g40/390312/avt/c60x60/cooky-avatar-637098477482487472.JPG" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/nguyenthitusuong" className="cooky-user-link name" data-userid={390312}>nguyenthitusuong HoaSenTuyết</a>
                          <span className="stats-text user-lvl tastee ">tastee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">6</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">48</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={390312} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum3">3</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g21/205942/avt/c60x60/cooky-avatar-636870187842720174.jpg" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/Diepngoc%20Nguyen" className="cooky-user-link name" data-userid={205942}>Nguyen Thi Ngoc Diep</a>
                          <span className="stats-text user-lvl chefee ">chefee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">86</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">2700</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={205942} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum4">4</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g30/299014/avt/c60x60/cooky-avatar-637042296918129252.jpg" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/hmkdesign3005" className="cooky-user-link name" data-userid={299014}>Bờ Ka</a>
                          <span className="stats-text user-lvl tastee ">tastee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">22</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">1642</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={299014} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum5">5</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g6/56885/avt/c60x60/cooky-avatar-636186878887916075.jpg" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/nhunhivo" className="cooky-user-link name" data-userid={56885}>Nhunhi Vo</a>
                          <span className="stats-text user-lvl cookee ">cookee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">7</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">333</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={56885} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="member-item-wrapper">
                    <div className="member-item">
                      <span className="topnum topnum6">6</span>
                      <div className="member-profile nopadding">
                        <div className="avatar z-effect">
                          <img src="https://media.cooky.vn/usr/g16/150077/avt/c60x60/cooky-avatar-636846610693292717.JPG" className="img-responsive img-circle" />
                        </div>
                        <div className="profile">
                          <a target="_blank" href="/thanh-vien/hoangoanh1976" className="cooky-user-link name" data-userid={150077}>Hoàng Oanh</a>
                          <span className="stats-text user-lvl chefee ">chefee</span>
                          <div className="stats">
                            <span className="stats-item">
                              <span className="stats-count">68</span>
                              <span className="stats-text">Công thức</span>
                            </span>
                            <span className="stats-item">
                              <span className="stats-count">1952</span>
                              <span className="stats-text">Quan tâm</span>
                            </span>
                          </div>
                          <div className="member-acts">
                            <friend-follow-item-button-only ng-cloak userid={150077} status={-1} type={1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn-more" href="/thanh-vien" target="_blank">Top thành viên »</a>
              </div>
            </div>
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
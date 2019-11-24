import React from 'react';
import Recipe from './Recipe';

class ListRecipe extends React.Component {
  render() {
    return (
      <div className="top-recipes-user">
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG" data-lazy="https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG" alt="Creme Brulee French Toast" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:45697,&quot;TotalLiked&quot;:145,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">145 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast" title="Creme Brulee French Toast">Creme Brulee French Toast</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 25p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Dễ</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 2.61K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/lafunie" className="name">
                    La Funie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/burger-thit-xong-khoi-va-nam-44130?itm_source=home_z3_p2_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Burger+thịt+xông+khói+và+nấm" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g5/44130/s320x240/cooky-recipe-636801749293406519.jpg" data-lazy="https://media.cooky.vn/recipe/g5/44130/s320x240/cooky-recipe-636801749293406519.jpg" alt="Burger thịt xông khói và nấm" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g5/44130/s320x240/cooky-recipe-636801749293406519.jpg" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:44130,&quot;TotalLiked&quot;:150,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">150 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/burger-thit-xong-khoi-va-nam-44130?itm_source=home_z3_p2_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Burger+thịt+xông+khói+và+nấm" title="Burger thịt xông khói và nấm">Burger thịt xông khói và nấm</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 20p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Dễ</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 2.94K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/kiimhuong" className="name">
                    Thái Thị Kim Hương
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/lau-tom-cang-49853?itm_source=home_z3_p3_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Lẩu+tôm+càng" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g5/49853/s320x240/cooky-recipe-637054415097582276.gif" data-lazy="https://media.cooky.vn/recipe/g5/49853/s320x240/cooky-recipe-637054415097582276.gif" alt="Lẩu tôm càng" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g5/49853/s320x240/cooky-recipe-637054415097582276.gif" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:49853,&quot;TotalLiked&quot;:74,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">74 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/lau-tom-cang-49853?itm_source=home_z3_p3_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Lẩu+tôm+càng" title="Lẩu tôm càng">Lẩu tôm càng</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 30p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Trung bình</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 1.01K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/miuscookerybook" className="name">
                    Miu's  Cookery Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/bia-up-nguoc-50244?itm_source=home_z3_p4_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Bia+úp+ngược" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g6/50244/s320x240/cooky-recipe-637054492687676844.gif" data-lazy="https://media.cooky.vn/recipe/g6/50244/s320x240/cooky-recipe-637054492687676844.gif" alt="Bia úp ngược" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g6/50244/s320x240/cooky-recipe-637054492687676844.gif" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:50244,&quot;TotalLiked&quot;:233,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">233 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/bia-up-nguoc-50244?itm_source=home_z3_p4_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Bia+úp+ngược" title="Bia úp ngược">Bia úp ngược</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 15p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Dễ</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 13.56K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/hongngocle3011" className="name">
                    Ngọc Lê
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/ca-ri-ech-nau-tieu-47998?itm_source=home_z3_p5_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Cà+ri+ếch+nấu+tiêu" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g5/47998/s320x240/cooky-recipe-636946542066001896.png" data-lazy="https://media.cooky.vn/recipe/g5/47998/s320x240/cooky-recipe-636946542066001896.png" alt="Cà ri ếch nấu tiêu" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g5/47998/s320x240/cooky-recipe-636946542066001896.png" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:47998,&quot;TotalLiked&quot;:93,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">93 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/ca-ri-ech-nau-tieu-47998?itm_source=home_z3_p5_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Cà+ri+ếch+nấu+tiêu" title="Cà ri ếch nấu tiêu">Cà ri ếch nấu tiêu</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 1h0p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Trung bình</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 1.04K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/wenkimtuyen" className="name">
                    BẾP THÁNG 12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="today-recipe-user">
          <div className="item-block recipe-block">
            <div className="item-content">
              <div className="featured-recipe-item">
                <div className="recipe-photo">
                  <a target="_blank" href="/cong-thuc/tom-rim-hat-oc-cho-sot-mat-ong-33343?itm_source=home_z3_p6_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Tôm+rim+hạt+óc+chó+sốt+mật+ong" className="photo">
                    <img data-original="https://media.cooky.vn/recipe/g4/33343/s320x240/cooky-recipe-636707989972199108.jpg" data-lazy="https://media.cooky.vn/recipe/g4/33343/s320x240/cooky-recipe-636707989972199108.jpg" alt="Tôm rim hạt óc chó sốt mật ong" className="lazy img-responsive" src="https://media.cooky.vn/recipe/g4/33343/s320x240/cooky-recipe-636707989972199108.jpg" style={{ display: 'block' }} />
                  </a>
                  <a href="javascript:void(0);" title="Yêu thích" ng-click="like()" className="btn-act btn-add-favourite ng-isolate-scope" options="{&quot;Id&quot;:33343,&quot;TotalLiked&quot;:62,&quot;IsLiked&quot;:false}">{/* ngIf: totalLikes > 0 */}<span ng-if="totalLikes > 0" className="ng-binding ng-scope">62 &nbsp;</span>{/* end ngIf: totalLikes > 0 */}<i className="ico ico-28 ico-iblock ico-favourite" ng-class="{'ico-favourite': !isLiked, 'ico-favourited' : isLiked}" /></a>
                </div>
                <div className="item-info-box">
                  <h3 className="title">
                    <a target="_blank" href="/cong-thuc/tom-rim-hat-oc-cho-sot-mat-ong-33343?itm_source=home_z3_p6_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Tôm+rim+hạt+óc+chó+sốt+mật+ong" title="Tôm rim hạt óc chó sốt mật ong">Tôm rim hạt óc chó sốt mật ong</a>
                  </h3>
                  <div className="stats">
                    <ul className="list-inline nomargin">
                      <li><span className="fa fa-clock-o stats-ico" /><span className="stats-count"> 30p</span></li>
                      <li><span className="fa fa-bolt stats-ico" /> <span className="stats-text"> Dễ</span></li>
                      <li><span className="fa fa-bar-chart stats-ico" /><span className="stats-count"> 1.21K</span> xem</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-header">
              <div className="hprofile">
                <div className="profile">
                  <span className="postedby-text">
                    công thức bởi:
                  </span>
                  <a target="_blank" href="/thanh-vien/thutram2618" className="name">
                    Trâm Trịnh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRecipe;
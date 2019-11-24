import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="clearfix header-cont newyear">
        <div className="root-nav">
          <div className="container">
            <div className="top-leaderboard">
            </div>
            <ul className="list-inline">
              <li className="active"><a href="/">Công thức nấu ăn</a></li>
              <li className><a href="/dia-diem"><span className="fa fa-map-marker" /> Địa điểm</a></li>
              <li className><a href="/san-pham"><span className="fa fa-shopping-basket" /> Sản phẩm</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar main-navbar clr-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-main-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-main-navbar-collapse-1" style={{ position: 'relative' }}>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/"><span className="glyphicon glyphicon-home" /></a>
                </li>
                <li className="menu-recipe ">
                  <ul className="header-shortcut-menu">
                    <li className="col">
                      <ul>
                        <li className="col-header">Thực đơn</li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-giam-can-p5?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=purpose&itm_campaign=GiamCan">Giảm cân</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-chay-c3?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=course&itm_campaign=MonChay">Món chay</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-an-vat-p7?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=purpose&itm_campaign=AnVat">Ăn vặt</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/banh-banh-ngot-c8?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=course&itm_campaign=BanhNgot">Bánh - bánh ngọt</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-loai-banh-ngot-ngon-d114?st=2&itm_source=seo_recipe_menu&itm_medium=mobile&itm_content=dishtype&itm_campaign=BanhNgot">Bánh ngọt</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-nhau-c10?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=course&itm_campaign=MonNhau">Món nhậu</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-chua-benh-p10?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=purpose&itm_campaign=ChuaBenh">Chữa bệnh</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-an-kieng-p4?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=purpose&itm_campaign=AnKieng">Ăn kiêng</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-sang-c5?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=course&itm_campaign=MonAnSang">Món ăn sáng</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-khai-vi-c1?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=course&itm_campaign=MonKhaiVi">Món khai vị</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col">
                      <ul>
                        <li className="col-header">Nguyên liệu</li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-ga-ngon-i5?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Ga">Gà</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-ca-ngon-i3?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Ca">Cá</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-heo-ngon-i2?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Heo">Heo</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-cua-ngon-i58?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Cua">Cua</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-bo-ngon-i18?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Bo">Bò</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-tu-tom-ngon-i57?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=ingredienttype&itm_campaign=Tom">Tôm</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col">
                      <ul>
                        <li className="col-header">Ẩm thực</li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-viet-nam-cs1?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=VietNam">Việt Nam</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-nga-cs18?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Nga">Nga</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-brazil-cs11?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Brazil">Brazil</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-trung-quoc-cs7?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=TrungQuoc">Trung Quốc</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-singapore-cs9?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Singapore">Singapore</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-han-quoc-cs4?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=HanQuoc">Hàn Quốc</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-thai-lan-cs2?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=ThaiLan">Thái Lan</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-malaysia-cs19?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Malaysia">Malaysia</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-phap-cs10?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Phap">Pháp</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-an-do-cs8?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=AnDo">Ấn độ</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-mexico-cs14?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Mexico">Mexico</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-indonesia-cs17?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=cuisine&itm_campaign=Indonesia">Indonesia</a>
                        </li>
                      </ul>
                    </li>
                    <li className="col" style={{ borderRight: 'none' }}>
                      <ul>
                        <li className="col-header">Mùa dịp lễ</li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-tet-trung-thu-o11?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=TrungThu">Trung thu</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-halloween-o12?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=Halloween">Halloween</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-le-tinh-nhan-o4?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=LeTinhNhan">Lễ tình nhân</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-sinh-nhat-o3?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=SinhNhat">Sinh nhật</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-giang-sinh-o1?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=GiangSinh">Giáng sinh</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-tet-o2?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=Tet">Tết</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-ngay-cua-me-o5?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=NgayCuaMe">Ngày của mẹ</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-com-gia-dinh-o7?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=ComGiaDinh">Cơm gia đình</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-le-hoi-le-cuoi-o8?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=LeCuoiHoi">Lễ cưới hỏi</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-ngay-an-chay-o9?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=NgayAnChay">Ngày ăn chay</a>
                        </li>
                        <li>
                          <a target="_self" href="/cach-lam/mon-an-ngay-ngay-thuong-o10?st=2&itm_source=seo_recipe_menu&itm_medium=desktop&itm_content=occasion&itm_campaign=NgayThuong">Ngày thường</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <a target="_self" className="menu-recipe-link" href="/cach-lam">Công thức</a>
                </li>
                <li className>
                  <a href="/cong-dong">Cộng đồng</a>
                </li>
                <li className>
                  <a href="/blog">Blog</a>
                </li>
                <li className>
                  <a href="/bo-suu-tap">Bộ sưu tập</a>
                </li>
                <li className>
                  <a href="/video">Videos</a>
                </li>
                <li className>
                  <a href="/thanh-vien">Top thành viên</a>
                </li>
                <li className>
                  <a href="/lop-hoc-nau-an"><span className="fa fa-calendar" /> Lớp học nấu ăn</a>
                </li>
                <li className>
                  <a href="/contest">Cuộc thi ẩm thực</a>
                </li>
                <li className>
                  <a href="/doi-thuong"><span className="fa fa-gift" /> Đổi thưởng</a>
                </li>
                <li className="dropdown )">
                  <a className="dropdown-toggle" id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fa fa-bars" /></a>
                  <ul className="dropdown-menu">
                    <li className>
                      <a href="/wiki"> <span className="fa fa-book" /> Wiki</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="right-banner-desktop" style={{ float: 'right', height: '32px' }}>
                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n        .right-button-banner { max-height: 64px; max-width:192px; overflow: hidden; margin-bottom: 5px; opacity: 0; visibility: hidden; transition: visibility 0s linear 300ms, opacity 300ms; position: relative; top: -4px;}\n            .right-button-banner.show { opacity: 1; visibility: visible ;transition: visibility 0s linear 300ms, opacity 300ms; }\n        .right-button-banner .slick-slide { float: right; }\n\t\t.right-button-banner .slick-slide img { height: 40px; margin-top: 0 !important; }\n        .right-button-banner img { border-radius:4px; height: 40px; margin-top: -5px; }\n    " }} />
                <div className="clearfix" style={{ marginBottom: '15px' }}>
                  <div className="right-button-banner show slick-initialized slick-slider">
                    <div className="slick-list draggable" tabIndex={0}><div className="slick-track" style={{ opacity: 1, width: '120px' }}><div className="slick-slide slick-active" index={0} style={{ width: '120px', position: 'relative', left: '0px', top: '0px', zIndex: 900, opacity: 1 }}>
                      <a target="_self" href="https://www.cooky.vn/hokkaido?utm_source=minibar_header&utm_medium=desktop&utm_content=minibar_shortcut&utm_campaign=hokkaido+delicious+japan" title="Delicious Japan">
                        <img src="https://www.cooky.vn/imgs/hokkaido/deliciousjapan_minibnr_192%C3%9764-min.png" alt="Delicious Japan" />
                      </a>
                    </div></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top clearfix">
          <div className="container" style={{ position: 'relative' }}>
            <div className="logo header-top-1">
              <div className="navbar-brand">
                <a href="/" style={{ color: '#fff' }}>
                  <img className="logo img-responsive" src="/Content/img/Cooky-Slogan-Official-Design.80.png" alt="Cooky - Công thức nấu ăn ngon" />
                </a>
              </div>
            </div>
            <div className="header-top-2">
              <div className="aligncenter-sm ng-scope" id="cookySearchBox">
                <div ng-controller="SearchSuggestionController" className="ng-scope">
                  <form id="searchform" className="form-horizontal ng-pristine ng-valid" data-behavior="url" data-source="[data-behavior=search_field]" method="get" noValidate="novalidate">
                    <div className="qsearch-box">
                      <input type="text" id="searchinput" autoComplete="off" name="url" data-behavior="search_field" placeholder="tìm kiếm công thức" ng-focus="keywordPress(event)" ng-keyup="keywordPress(event)" ng-model="keyword" className="ng-pristine ng-untouched ng-valid ng-empty" />
                      <button type="submit" className="glyphicon glyphicon-search ico-search" />
                    </div>
                    <div style={{ display: 'none' }} className="search-suggest-panel">
                      <ul className="group suggest-recipe">
                        <li>
                          <div className="left">Từ khóa</div>
                          <ul className="items">
                            <li>
                              <div ng-click="goSearchResults()">
                                <span className="textname ng-binding" />
                                <a ng-href="/cach-lam/?st=7" className="detail-link" href="/cach-lam/?st=7">Xem tất cả</a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="left">Công thức</div>
                          <ul className="items">
                            {/* ngRepeat: item in items */}
                          </ul>
                        </li>
                      </ul>
                      <ul className="group trend" style={{ display: 'none' }}>
                        <li>
                          <div className="left" style={{ color: '#f36f36' }}>Xu hướng tìm kiếm</div>
                          <ul className="items trend-items ">
                            {/* ngRepeat: item in itemsTrend */}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="navbar-right user-header">
              <div className="cell">
                <a className="btn-quick-create" title="Đăng công thức" href="/cong-thuc/tao-cong-thuc">
                  <span className="cooky-ico">Đăng công thức</span>
                </a>
              </div>
              <div className="cell dropdown" style={{ paddingRight: 0 }}>
                <span id="openRequiredDialog" className="btn-login" onclick="openRequiredDialogEvent()">Đăng nhập</span>
              </div>
            </div>
            <div id="update-profile-popup" style={{ display: 'none' }} />
            <div id="update-profile-popup-loading" style={{ display: 'none' }}>
              Đang tải ...
            </div>
            <div id="loginPopup" style={{ display: 'none' }}>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
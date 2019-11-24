import React from 'react';
import ListTopMember from './footer/ListTopMember';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-inner">
          <div className="wide-box wide-box-white top-members-wrapper">
            <div className="home-top-box noborder-box">
              <div className="container">
                <div className="latest-box-header headline">
                  <h2>TOP THÀNH VIÊN</h2>
                </div>
                <ListTopMember />
              </div>
            </div>
          </div>
          <div className="wide-box">
            <div className="top-course-box">
              <div className="container">
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
                <div className="top-course-list">
                  <div className="top-course-header">
                    <h3>Ẩm thực</h3>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-viet-nam-cs1" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" /> Việt Nam
                      <span className="text">(<span className="count">24256</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-thai-lan-cs2" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" /> Thái Lan
                      <span className="text">(<span className="count">477</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-y-cs3" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" /> Ý
                      <span className="text">(<span className="count">383</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-han-quoc-cs4" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" /> Hàn Quốc
                      <span className="text">(<span className="count">875</span>)</span>
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
                <div className="top-course-list">
                  <div className="top-course-header">
                    <h3>Loại món</h3>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-snacks-ngon-d122" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Snacks
                      <span className="text">(<span className="count">377</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-cupcake-muffin-ngon-d123" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Cupcake - Muffin
                      <span className="text">(<span className="count">161</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-pasta-spaghetti-ngon-d124" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Pasta - Spaghetti
                      <span className="text">(<span className="count">401</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-mien-hu-tieu-ngon-d125" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Miến - Hủ tiếu
                      <span className="text">(<span className="count">226</span>)</span>
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
                <div className="top-course-list">
                  <div className="top-course-header">
                    <h3>Mục đích</h3>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-an-sang-p2" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Ăn sáng
                      <span className="text">(<span className="count">7997</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-an-trua-p3" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Ăn trưa
                      <span className="text">(<span className="count">17106</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-an-kieng-p4" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Ăn kiêng
                      <span className="text">(<span className="count">1035</span>)</span>
                    </a>
                  </div>
                  <div className="top-course-item">
                    <a href="/cach-lam/mon-an-giam-can-p5" target="_blank" className="mon-khai-vi">
                      <span className="fa fa-angle-right" />
                      Giảm cân
                      <span className="text">(<span className="count">1134</span>)</span>
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
              </div>
            </div>
          </div>
          <div className="static-footer wide-box">
            <div className="container">
              <div className="intro-links top-list">
                <div className="headline">
                  <h3 className="title">Về Cooky.vn</h3>
                </div>
                <ul className="list-unstyled nomargin">
                  <li><a href="/wiki" target="_blank"><span className="fa fa-angle-right" /> Wiki</a></li>
                  <li><a href="/jobs" target="_blank"><span className="fa fa-angle-right" /> Jobs</a></li>
                  <li><a href="/gioi-thieu" target="_blank"><span className="fa fa-angle-right" /> Giới thiệu</a></li>
                  <li><a href="/gop-y" target="_blank"><span className="fa fa-angle-right" /> Góp ý</a></li>
                  <li><a href="/lien-he" target="_blank"><span className="fa fa-angle-right" /> Liên hệ</a></li>
                  <li><a href="/lien-he" target="_blank"><span className="fa fa-angle-right" /> Báo lỗi</a></li>
                  <li><a href="/quen-mat-khau" target="_blank"><span className="fa fa-angle-right" /> Quên mật khẩu</a></li>
                  <li><a href="/dang-ky" target="_blank"><span className="fa fa-angle-right" /> Đăng ký thành viên</a></li>
                </ul>
              </div>
              <div className="top-list">
                <div className="headline">
                  <h3 className="caption-subject title bold uppercase center"> Tải ứng dụng nấu ăn Cooky</h3>
                </div>
                <div className="download-zone">
                  <div className="downapp">
                    <a target="_blank" href="https://itunes.apple.com/us/app/cooky/id1056621751" rel="nofollow">
                      <img style={{ width: '120px', height: 'auto' }} alt="Cooky iOS app - Ứng dụng hướng dẫn nấu ăn ngon trên iOS" src="/imgs/MobileApp/appstore.png" data-pin-nopin="true" />
                    </a>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=vn.cooky.cooky" rel="nofollow">
                      <img style={{ width: '120px', height: 'auto' }} alt="Cooky android app - Ứng dụng hướng dẫn nấu ăn ngon trên android" src="/imgs/MobileApp/googleplayx48.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix" style={{ backgroundColor: '#f4f4f4', padding: '10px 20px', fontSize: '12px' }}>
            <div className="container" style={{ position: 'relative' }}>
              <div className="nopadding" style={{ textAlign: 'center' }}>
                <div className="privacy-links">
                  <ul className="list-inline">
                    <li><a href="/privacy" target="_blank"> Chính sách</a></li>
                    <li><a href="/tro-giup/chinh-sach-diem-thuong" target="_blank"> Chính sách điểm</a></li>
                    <li><a href="/terms" target="_blank"> Quy định sử dụng</a></li>
                  </ul>
                </div>
                <div style={{ paddingRight: '15px', color: '#777' }}>
                  © 2019 Cooky.vn.
                  <span>Giấy phép MXH 540/GP-BTTTT cấp ngày 01/11/2017 </span>
                </div>
                <div className="language-box" style={{ position: 'absolute', bottom: '15px', left: 0 }}>
                  <a href="/common/setlanguage?langid=1&returnUrl=https://www.cooky.vn/" className="l-indicator current"><img className="flag img-responsive" src="/Content/img/icons/flags/VN.png" alt="vietnamese" rel="nofollow" /> Tiếng Việt</a>
                  <a href="/common/setlanguage?langid=2&returnUrl=https://www.cooky.vn/" className="l-indicator"><img className="flag img-responsive" src="/Content/img/icons/flags/USA.png" alt="english" rel="nofollow" /> English</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-overlay" />
      </footer>
    );
  }
}

export default Footer;
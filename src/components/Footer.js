import React from 'react';
import ListCourse from './footer/ListCourse';


class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-inner">
          <ListCourse />
          <div className="clearfix" style={{backgroundColor: '#f4f4f4', padding: '10px 20px', fontSize: '12px'}}>
            <div className="container" style={{position: 'relative'}}>
              <div className="nopadding" style={{textAlign: 'center'}}>
                <div className="privacy-links">
                  <ul className="list-inline">
                    <li><a href="/privacy" target="_blank"> Chính sách</a></li>
                    <li><a href="/tro-giup/chinh-sach-diem-thuong" target="_blank"> Chính sách điểm</a></li>
                    <li><a href="/terms" target="_blank"> Quy định sử dụng</a></li>
                  </ul>
                </div>
                <div style={{paddingRight: '15px', color: '#777'}}>
                  © 2019 Cooky.vn.
                  <span>Giấy phép MXH 540/GP-BTTTT cấp ngày 01/11/2017 </span>
                </div>
                <div className="language-box" style={{position: 'absolute', bottom: '15px', left: 0}}>
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
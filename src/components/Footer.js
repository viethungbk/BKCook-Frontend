import React from 'react';
// import ListCourse from './footer/ListCourse';

const listBottom = [
  {
    title: 'Về BKCook',
    items: ['Công thức', 'Cộng đồng', 'Blog', 'Lớp học nấu ăn']
  }, {
    title: 'Tài khoản',
    items: ['Xem thông tin', 'Giúp đỡ']
  }
]

const Item = ({ title, items }) => {
  return (
    <>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold" style={{color: 'white'}}>{title}</h6>
        {
          items.map((item, index) => (
            <p key={index}>
              <a href="#!">{item}</a>
            </p>
          ))
        }
      </div>
      <hr className="w-100 clearfix d-md-none" />
    </>

  )
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small mdb-color pt-4" style={{ backgroundColor: '#45526E', color: 'white' }}>
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">BkCook.vn</h6>
              <p>Tìm kiếm các công thức và món ngon</p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            {
              listBottom.map((bot, index) => <Item key={index} title={bot.title} items={bot.items} />)
            }
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" />Số 17 Giải phóng, Hà Nội</p>
              <p>
                <i className="fa fa-envelope mr-3" />bkhust@sis.hust.edu.vn</p>
              <p>
                <i className="fa fa-phone mr-3" /> + 031008789165</p>
              <p>
                <i className="fa fa-print mr-3" /> + 0966351706</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Footer links */}
          <hr />
          {/* Grid row */}
          <div className="row d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-7 col-lg-8">
              {/*Copyright*/}
              <p className="text-center text-md-left">© 2018 Copyright:
                <a href="#">
                  <strong> BKCook.com</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href='facebook.com' className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href='twitter.com' className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href='google.com' className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href='facebook.com' className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
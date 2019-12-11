import React from 'react';
import { Link, Route } from 'react-router-dom';
import { MENUS } from '../constants/Config';
import { showListItem } from '../actions/function';
import Login from './Login';

const MenuLink = (props) => {
  let { name, to, exact } = props.item;

  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let active = match ? 'active' : '';
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>{name}</Link>
          </li>
        );
      }}
    />
  );
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link className="navbar-brand" to='/'>BkCook</Link>

              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {showListItem(MENUS, MenuLink)}
              </ul>
              <form className="form-inline my-2 my-lg-0 mr-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="tìm kiếm công thức" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <form className="form-inline">
                <button className="btn btn-outline-success mr-2" type="button">Đăng công thức</button>
                {/* <button className="btn btn-outline-secondary" type="button">Đăng nhập</button> */}
              </form>
              <div>
                <button type="button" className="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Đăng nhập</button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                      <Login />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

      </header>

    );
  }
}

export default Header;
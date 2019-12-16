import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MENUS } from '../constants/Config'
import { showListItem } from '../actions/function'
import AccountContainer from '../containers/user/AccountContainer'
import { recipeActions } from '../actions/recipeActions'

const MenuLink = (props) => {
  let { name, to, exact } = props.item
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let active = match ? 'active' : ''
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>{name}</Link>
          </li>
        )
      }}
    />
  )
}

const Header = () => {
  const dispatch = useDispatch()
  let [state, setState] = useState({
    search: ''
  })

  const handleChange = (e) => {
    dispatch(recipeActions.search(e.target.value))
    setState({
      ...state,
      search: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(recipeActions.search(state.search))
  }

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to='/'>BkCook</Link>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {showListItem(MENUS, MenuLink)}
            </ul>
            <form className="form-inline my-2 my-lg-0 mr-auto" onSubmit={handleSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="tìm kiếm công thức" aria-label="Search" onChange={handleChange} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
            </form>
            <AccountContainer />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
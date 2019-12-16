import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../actions/userActions'

const Account = (props) => {
  let { handleLogout } = props
  let { userName } = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="dropdown">
      <Link className="btn btn-outline-success mr-2" to='/recipe/add'>Đăng công thức</Link>
      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {/* <img src="https://i.pinimg.com/236x/00/8b/7c/008b7c4df7f76c54008b3fb527b3722c--monkey-d-luffy-one-piece.jpg" className="rounded-circle avatar" alt="Cinque Terre" /> */}

        {userName}
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Cập nhật hồ sơ</a>
        <div className="dropdown-divider" />
        <button className='dropdown-item' onClick={handleLogout}>Đăng xuất</button>
      </div>
    </div>
  )
}

class AccountContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout()
  }
  render() {
    let { user } = this.props
    return (
      <div>
        {
          user ? <Account user={user} handleLogout={this.handleLogout} /> : <Link className="btn btn-outline-secondary" to='/login'>Đăng nhập</Link>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  let { user } = state.authenticationReducer
  return { user }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {
      dispatch(userActions.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
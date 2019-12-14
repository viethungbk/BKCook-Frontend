import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../actions/userActions'

const Account = (props) => {
  let { user, handleLogout } = props
  let { userName } = user
  return (
    <div className="dropdown">
      <button className="btn btn-outline-success mr-2" type="button">Đăng công thức</button>
      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {/* <div className='avatar'> */}
        <img src="https://i.pinimg.com/236x/00/8b/7c/008b7c4df7f76c54008b3fb527b3722c--monkey-d-luffy-one-piece.jpg" className="rounded-circle avatar" alt="Cinque Terre" />
        {/* </div> */}

        {userName}
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Cập nhật hồ sơ</a>
        <div className="dropdown-divider" />
        <button className='dropdown-item' onClick={handleLogout}>Đăng xuất</button>
        {/* <a className="" href="#">Đăng xuất</a> */}
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
    console.log('logout')
    console.log(this.props.logout())
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
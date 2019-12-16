import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../actions/userActions'
import Loading from './Loading'

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault();

    let { userName, email, password } = this.state
    if (userName && email && password) {
      let user = { userName, email, password }
      // console.log(user)
      this.props.register(user)
    }
  }
  render() {
    let { userName, email, password } = this.state
    let { registering, type, message } = this.props
    return (
      <div className="container mt-10">
        <div className="myform form m-auto">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Signup</h1>
            </div>
          </div>
          <form name="registration" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên</label>
              <input id="userName" className="form-control" type="text" placeholder="Vui lòng nhập tên" name="userName" value={userName} onChange={this.handleChange} required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Địa chỉ Email</label>
              <input id="email" className="form-control" type="email" placeholder="nhập địa chỉ email" name="email" value={email} onChange={this.handleChange} required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mật khẩu</label>
              <input id="password" className="form-control" type="password" placeholder="nhập password" name="password" value={password} onChange={this.handleChange} required={true} />
            </div>
            <div className="col-md-12 text-center mb-3">
              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Đăng ký</button>
              <Loading isLoading={registering} />
              <div className={`alert ${type} mt-2`} role="alert">
                {message}
              </div>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <p className="text-center"><Link to='/login'>Đã có tài khoản?</Link></p>
                <p className="text-center">Không muốn đăng ký? <Link to='/'>Trang chủ</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let { registering } = state.registrationReducer
  return { registering }
}

const mapDispatchToProps = (dispathch, props) => {
  return {
    register: (user) => {
      dispathch(userActions.register(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
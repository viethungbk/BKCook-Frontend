import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../actions/userActions'
import { Redirect } from 'react-router-dom'
import Loading from '../components/Loading'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.clear()
  }

  handleChange(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ submitted: true })
    let { email, password } = this.state
    if (email && password) {
      this.props.login(email, password)
    }
  }
  render() {
    let { email, password } = this.state
    let { loggingIn, loggedIn, type, message } = this.props

    return (
      <div className="container mt-10">
        <div className="myform form m-auto">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <form name="login" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input id="email" className="form-control" placeholder="Enter email" type="email" name="email" value={email} onChange={this.handleChange} required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input id="password" className="form-control" placeholder="Enter Password" type="password" name="password" value={password} onChange={this.handleChange} required={true} />
            </div>
            <div className="form-group">
              <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
            </div>
            <div className="col-md-12 text-center ">
              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Đăng nhập</button>
              <Loading isLoading={loggingIn} />
              {
                loggedIn && <Redirect to='/' />
              }

            </div>
            <div className="col-md-12 ">
              <div className="login-or">
                <hr className="hr-or" />
                <span className="span-or">or</span>
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <p className="text-center">
                <a className="google btn mybtn">
                  <i className="fa fa-google-plus" />Đăng nhập với google
                  </a>
              </p>
            </div>
            <div className="form-group">
              <p className="text-center">Không có tài khoản? <Link to='/register'>Đăng ký tại đây</Link></p>
              <p className="text-center">Không muốn đăng nhập? <Link to='/'>Trang chủ</Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { loggingIn, loggedIn } = state.authenticationReducer

  return { loggingIn, loggedIn }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (email, password) => {
      dispatch(userActions.login(email, password))
    },
    clear: () => {
      dispatch(userActions.clear())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../actions/userActions'
import { Redirect } from 'react-router-dom'

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
              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
              {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
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
                  <i className="fa fa-google-plus" />Signup using Google
                  </a>
              </p>
            </div>
            <div className="form-group">
              <p className="text-center">Don't have account? <Link to='/register'>Sign up here</Link></p>
              <p className="text-center">Don't want sign in? <Link to='/'>HomePage</Link></p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { loggingIn, loggedIn } = state.authenticationReducer
  const { type, message } = state.alertReducer

  return { loggingIn, loggedIn, type, message }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (email, password) => {
      dispatch(userActions.login(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
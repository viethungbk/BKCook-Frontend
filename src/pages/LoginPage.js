import React from 'react'
import { Link } from 'react-router-dom'
import LayoutNoWrap from '../components/LayoutNoWrap'
import Login from '../components/Login'

class LoginPage extends React.Component {
  render() {
    return (
      <LayoutNoWrap>

        <Login />
      </LayoutNoWrap>

    )
  }
}

export default LoginPage

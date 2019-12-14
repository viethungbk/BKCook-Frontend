import React from 'react'
import { Link } from 'react-router-dom'
import LayoutNoWrap from '../components/LayoutNoWrap'
import Register from '../components/Register'

class RegisterPage extends React.Component {
  render() {
    return (
      <LayoutNoWrap>

        <Register />
      </LayoutNoWrap>

    )
  }
}

export default RegisterPage
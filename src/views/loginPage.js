import React from "react";
import LayoutNoWrap from "../components/LayoutNoWrap";
import Login from "../components/Login";

class LoginPage extends React.Component {
  render() {
    return (
      <LayoutNoWrap>
        <Login />
      </LayoutNoWrap>
    );
  }
}

export default LoginPage;

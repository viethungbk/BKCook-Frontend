/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import callApi from "../../utils/apiCaller";
import UserItem from "../../components/user-profile-lite/UserItem";
import ListUser from "../../components/user-profile-lite/ListUser";

class ListUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    callApi("users/all", "GET", null).then(res => {
      // console.log(res.data);
      console.log(res);
      this.setState({
        users: res.data.data
      });
    });
  }

  render() {
    var { users } = this.state;
    if (users.length === 0) {
      return <div>Không có người dùng nào </div>;
    }
    return <ListUser>{this.showUsers(users)}</ListUser>;
  }
  showUsers(users) {
    var result = null;
    if (users.length > 0) {
      result = users.map((user, index) => {
        return <UserItem key={index} user={user} index={index} />;
      });
    }
    return result;
  }
}

export default ListUserPage;

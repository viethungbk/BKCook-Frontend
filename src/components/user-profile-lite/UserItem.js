import React, { Component } from "react";
import { Button } from "shards-react";
class UserItem extends Component {
  render() {
    var { user, index } = this.props;
    const { userName, email, dateCreated } = user;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{dateCreated}</td>
        <td>
          <Button
            theme="danger"
            style={{ width: "60px", margin: "5px", padding: "5px" }}
          >
            Xóa
          </Button>
        </td>
      </tr>
    );
  }
}

export default UserItem;

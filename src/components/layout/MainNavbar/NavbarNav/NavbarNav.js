import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="border-left flex-row" style={{ margin: '0px', padding: '0px', position: 'absolute', right: '20px' }}>
    <Notifications />
    <UserActions />
  </Nav>
);

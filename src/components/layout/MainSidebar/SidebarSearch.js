import React from "react";
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

export default () => (
  <Form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
  </Form>
);

import React from "react";
import {
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

const EditMaterial = () => (
  <form style={{ background: 'white', padding: '10px' }}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Tên nguyên liệu</label>
      <input type="text" className="form-control" placeholder="name recipe`s material" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Số lượng</label>
      <input type="text" className="form-control" placeholder="amount" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Đơn vị đo</label>
      <input type="text" className="form-control" placeholder="unit" />
    </div>
    <button type="submit" className="btn btn-primary">Thêm</button>
  </form>
);

export default EditMaterial;

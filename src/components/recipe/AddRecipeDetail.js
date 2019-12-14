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

const AddRecipeDetail = () => (
    <form style={{ background: 'white', padding: '10px' }}>
        <div className="form-group">
            <label>Tên công thức</label>
            <input type="text" className="form-control" placeholder="Nhập vào tên công thức" />
        </div>
        <div className="form-group">
            <label>Tác giả</label>
            <input type="text" className="form-control" placeholder="người tạo công thức" />
        </div>
        <div className="form-group">
            <label>Thời gian tạo </label>
            <input type="text" className="form-control" placeholder="ngày tạo công thức" />
        </div>
        <div className="form-group">
            <label>Trạng thái</label>
            <input type="text" className="form-control" placeholder="Trạng thái " />
        </div>
        <div className="custom-file mb-3">
            <input type="file" className="custom-file-input" id="customFile2" />
            <label className="custom-file-label" htmlFor="customFile2">
                Chọn hình ảnh
            </label>
        </div>
        <button type="submit" className="btn btn-primary">Thêm</button>
    </form>
);

export default AddRecipeDetail;

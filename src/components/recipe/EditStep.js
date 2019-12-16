import React from "react";

const EditStep = () => (
  <form style={{ background: "white", padding: "20px" }}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Tên bước</label>
      <input
        type="text"
        className="form-control"
        placeholder="name recipe`s step"
      />
    </div>
    <div className="custom-file mb-3">
      <input type="file" className="custom-file-input" id="customFile2" />
      <label className="custom-file-label" htmlFor="customFile2">
        Chọn hình ảnh
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Thêm
    </button>
  </form>
);

export default EditStep;

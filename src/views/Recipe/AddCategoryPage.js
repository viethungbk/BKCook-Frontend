import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "../../utils/apiCaller";

class AddCategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: ""
    };
  }
  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onSave = e => {
    e.preventDefault();
    var { title, image } = this.state;
    let accessToken = localStorage.getItem("token");

    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    let formData = new FormData();

    formData.set("image", image);
    formData.set("title", title);

    callApi("categories", "POST", formData, headers)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log("err", err.response);
        console.log("hi");
      });
  };

  handleImage = e => {
    this.setState({
      ...this.state,
      image: e.target.files[0]
    });
  };

  render() {
    var { title, image } = this.state;
    return (
      <Container>
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Thêm loại công thức"
            subtitle="công thức"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <form
            style={{
              background: "white",
              padding: "10px",
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "20px"
            }}
            onSubmit={this.onSave}
          >
            <div className="form-group">
              <label>Tên loại công thức</label>
              <input
                type="text"
                className="form-control"
                placeholder="nhập tên loại công thức"
                name="title"
                value={title}
                onChange={this.onChange}
              />
            </div>
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                name="image"
                onChange={this.handleImage}
              />
              <label className="custom-file-label" htmlFor="customFile2">
                Chọn hình ảnh
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Thêm loại công thức
            </button>
          </form>
        </Row>
      </Container>
    );
  }
}

export default AddCategoryPage;

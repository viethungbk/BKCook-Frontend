import React from "react";
import { Container, Row, Col, FormTextarea } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "../../utils/apiCaller";

class AddBlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      content: "",
      video: ""
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
    var { title, image, content, video } = this.state;
    var { history } = this.props;
    let accessToken = localStorage.getItem("token");

    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    let formData = new FormData();

    formData.set("image", image);
    formData.set("title", title);
    formData.set("content", content);
    formData.set("video", video);

    callApi("blogs", "POST", formData, headers)
      .then(res => {
        alert("Thêm thành công");
        console.log("res", res);
        history.push("/listBlog");
      })
      .catch(err => {
        alert("Thêm không thành công");
        console.log("err", err);
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
    var { title, image, content, video } = this.state;
    return (
      <Container style={{ width: "100%" }}>
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Thêm bài viết"
            subtitle="Bài viết"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <form
            style={{
              background: "white",
              padding: "25px",
              width: "80%",
              marginLeft: "10%",
              marginRight: "10%",
              marginBottom: "20px"
            }}
            onSubmit={this.onSave}
          >
            <div className="form-group">
              <label>Tên bài viết</label>
              <input
                type="text"
                className="form-control"
                placeholder="nhập tên bài viết"
                name="title"
                value={title}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Linh video</label>
              <input
                type="text"
                className="form-control"
                placeholder="https://www.youtube.com/watch?v=tdkNKgTMtqc"
                name="video"
                value={video}
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
            <Row form>
              <Col md="12" className="form-group">
                <label htmlFor="feDescription">Nội dung bài viết</label>
                <FormTextarea
                  name="content"
                  value={content}
                  onChange={this.onChange}
                  rows="5"
                />
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary">
              Thêm bài viết
            </button>
          </form>
        </Row>
      </Container>
    );
  }
}

export default AddBlogPage;

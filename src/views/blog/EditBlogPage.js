import React from "react";
import { Container, Row, Col, FormTextarea } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "../../utils/apiCaller";
const queryString = require("query-string");

class EditBlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {},
      title: "",
      image: "",
      content: "",
      video: ""
    };
  }
  componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    callApi(`blogs/id?id=${search.id}`, "GET", null).then(res => {
      // console.log(res.data);
      this.setState({
        blog: res.data.data || null
      });
    });
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
    var { title, image, content, video, blog } = this.state;
    let accessToken = localStorage.getItem("token");

    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    let formData = new FormData();
    formData.set("idBlog", blog._id);
    formData.set("image", image);
    formData.set("title", title);
    formData.set("content", content);
    formData.set("video", video);
    // console.log(10);

    callApi("blogs/edit", "PATCH", formData, headers)
      .then(res => {
        console.log(10);
        console.log("res", res);
      })
      .catch(err => {
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
    var { title, image, content, video, blog } = this.state;
    // console.log(blog);
    return (
      <Container style={{ width: "100%" }}>
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Chỉnh sửa bài viết"
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
                placeholder={blog.title}
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
                placeholder={blog.video}
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
                {blog.image}
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
                  placeholder={blog.content}
                />
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary">
              Chỉnh sửa bài viết
            </button>
          </form>
        </Row>
      </Container>
    );
  }
}

export default EditBlogPage;

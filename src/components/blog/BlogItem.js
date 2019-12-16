import React, { Component } from "react";
import { Col, Card, CardBody, Button } from "shards-react";
import { Link } from "react-router-dom";
class BlogItem extends Component {
  render() {
    var { blog, index } = this.props;
    return (
      <Col lg="6" sm="12" className="mb-4" key={index}>
        <Card small className="card-post card-post--aside card-post--1">
          <CardBody>
            <h5
              className="card-title p-3"
              style={{ fontSize: "17px", height: "70px" }}
            >
              <a className="text-fiord-blue" href="#">
                {blog.title}
              </a>
            </h5>
            <div className="read-me card-text d-inline-block mb-3">
              <img
                src={`http://202.191.56.159:2900/${blog.image}`}
                className="img-fluid mb-3"
                style={{ width: "600px", height: "300px" }}
              />
            </div>
            <div className="d-flex flex-col">
              <Button
                theme="warning"
                style={{
                  marginLeft: "40%",
                  marginRight: "45%",
                  padding: "10px"
                }}
              >
                <Link
                  to={`/editBlog?id=${blog._id}`}
                  style={{ color: "white" }}
                >
                  Chi tiết
                </Link>
              </Button>
              <Button
                theme="danger"
                style={{
                  marginLeft: "40%",
                  marginRight: "45%",
                  padding: "10px"
                }}
                onClick={() => this.onDelete(blog._id)}
              >
                Xóa
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BlogItem;

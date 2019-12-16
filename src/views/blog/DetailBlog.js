import React from "react";
import { Container, Row } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import BlogDetailItem from "../../components/blog/BlogDetailItem";
const queryString = require("query-string");

class DetailBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: null
    };
  }

  componentDidMount() {
    console.log(this.props.history.search);
    const search = queryString.parse(this.props.history.search);
    callApi(`blogs/id?id=${search.id}`, "GET", null).then(res => {
      // console.log("aaa", res.data);
      // var { data } = res.data;
      // let recipe = null;
      // if (data) {
      //     recipe = data;
      // }
      this.setState({
        blog: res.data.data || null
      });
    });
  }

  render() {
    var { blog } = this.state;
    console.log(blog);
    if (!blog) {
      return <div></div>;
    }
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Chi tiết bài viết"
            subtitle="bài viết"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row style={{ margin: "10px", padding: "15px" }}>
          <BlogDetailItem blog={blog} />
        </Row>
      </Container>
    );
  }
}

export default DetailBlog;

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
    const search = queryString.parse(this.props.location.search);
    callApi(`blogs/id?id=${search.id}`, "GET", null).then(res => {
      this.setState({
        blog: res.data.data || null
      });
    });
  }

  render() {
    let { history } = this.props;
    var { blog } = this.state;
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
          <BlogDetailItem blog={blog} history={history} />
        </Row>
      </Container>
    );
  }
}

export default DetailBlog;

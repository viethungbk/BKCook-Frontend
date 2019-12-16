import React, { Component } from "react";
import { Card, CardHeader, Button } from "shards-react";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";
class BlogDetailItem extends Component {
  onDelete = id => {
    if (confirm("Bạn chắc chắn muốn xóa ?")) {
      /* eslint no-restricted-globals:0 */
      callApi("blogs/id", "DELETE", { id: id }).then(res => {
        if (res.status === 200) {
          history.push("/listBlog");
        }
      });
    }
  };
  render() {
    var { blog, history } = this.props;
    const { _id, title, content, video, image } = blog;
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <h6
            className="m-0 font-weight-bold"
            style={{ padding: "20px", fontSize: "18px" }}
          >
            Bài viết: {title}
          </h6>
          <div className="mb-3 mx-auto">
            <img src={`http://202.191.56.159:2900/${image}`} alt={title} />
            <p></p>
          </div>
          Link video:
          <a href={video}>{video}</a>
          <p style={{ margin: "justify" }}>{content}</p>
          <Button
            theme="danger"
            style={{ width: "60px", margin: "5px", padding: "5px" }}
            onClick={() => this.onDelete(_id)}
          >
            Xóa
          </Button>
          <Button
            theme="warning"
            style={{ width: "60px", margin: "5px", padding: "5px" }}
          >
            <Link to={`blogEdit/?id=`} style={{ color: "white" }}>
              Chỉnh sửa
            </Link>
          </Button>
        </CardHeader>
      </Card>
    );
  }
}

export default BlogDetailItem;

import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";
import callApi from "../utils/apiCaller";

class BlogOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalUser: 0
    };
  }
  componentDidMount() {
    callApi("users/total", "GET", null).then(res => {
      if (res.data) {
        this.setState({
          totalUser: res.data.data
        });
      } else {
        this.setState({
          totalUser: 0
        });
      }
    });
  }

  render() {
    let { totalUser } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Trang chủ"
            subtitle="admin"
            className="text-sm-left mb-3"
          />
        </Row>
        <div className="d-flex flex-col" style={{ padding: "30px" }}>
          <div
            style={{
              width: "18%",
              margin: "1%",
              height: "150px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "18%",
                marginRight: "18%",
                width: "64%",
                marginTop: "18%",
                color: "#41C6F4",
                marginBottom: "0px",
                paddingBottom: "0px",
                fontSize: "25px"
              }}
            >
              Công thức
            </p>
            <br></br>
            <p
              style={{
                marginLeft: "30%",
                color: "#41C6F4",
                marginRight: "18%",
                fontSize: "35px",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              100
            </p>
          </div>

          <div
            style={{
              width: "18%",
              margin: "1%",
              height: "150px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "18%",
                marginRight: "18%",
                width: "64%",
                marginTop: "18%",
                color: "#41C6F4",
                marginBottom: "0px",
                paddingBottom: "0px",
                fontSize: "25px"
              }}
            >
              Bài viết
            </p>
            <br></br>
            <p
              style={{
                marginLeft: "30%",
                color: "#41C6F4",
                fontSize: "35px",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              100
            </p>
          </div>
          <div
            style={{
              width: "18%",
              margin: "1%",
              height: "150px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "10%",
                marginTop: "18%",
                width: "80%",
                color: "#41C6F4",
                marginBottom: "0px",
                paddingBottom: "0px",
                fontSize: "25px"
              }}
            >
              Người dùng
            </p>
            <br></br>
            <p
              style={{
                marginLeft: "40%",
                color: "#41C6F4",
                fontSize: "35px",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              {totalUser}
            </p>
          </div>
          <div
            style={{
              width: "18%",

              margin: "1%",
              height: "150px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "18%",
                marginRight: "18%",
                width: "64%",
                marginTop: "18%",
                color: "#41C6F4",
                marginBottom: "0px",
                paddingBottom: "0px",
                fontSize: "25px"
              }}
            >
              Nhà hàng
            </p>
            <br></br>
            <p
              style={{
                marginLeft: "30%",
                color: "#41C6F4",
                fontSize: "35px",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              100
            </p>
          </div>
          <div
            style={{
              width: "18%",
              margin: "1%",
              height: "150px",
              background: "white",
              borderRadius: "10px"
            }}
          >
            <p
              style={{
                marginLeft: "18%",
                marginRight: "18%",
                width: "64%",
                marginTop: "18%",
                color: "#41C6F4",
                marginBottom: "0px",
                paddingBottom: "0px",
                fontSize: "25px"
              }}
            >
              Lớp học
            </p>
            <br></br>
            <p
              style={{
                marginLeft: "30%",
                color: "#41C6F4",
                fontSize: "35px",
                marginTop: "0px",
                paddingTop: "0px"
              }}
            >
              100
            </p>
          </div>
        </div>
        <Row>
          <Col
            lg="7"
            className="mb-4"
            style={{ width: "60%", marginRight: "2%", background: "white" }}
          >
            <div
              style={{
                height: "70px",
                paddingTop: "20px",
                marginLeft: "30%",
                marginRight: "30%"
              }}
            >
              <h4>Ăn ngon mỗi ngày</h4>
            </div>
            <img
              src={require("../images/adminpage.jpg")}
              style={{ width: "100%" }}
            ></img>
          </Col>
          <Col
            lg="4"
            className="mb-4"
            style={{ width: "30%", background: "white" }}
          >
            <div
              style={{
                height: "70px",
                paddingTop: "20px",
                marginLeft: "30%",
                marginRight: "30%"
              }}
            >
              <h4></h4>
            </div>
            <img
              src={require("../images/admin.jpg")}
              style={{ width: "100%" }}
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BlogOverview;

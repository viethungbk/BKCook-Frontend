import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

const BlogOverview = props => {
  const { smallStats } = props;

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}

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
        {/* Users Overview */}
        <Col
          lg="8"
          className="mb-4"
          style={{ width: "70%", background: "white" }}
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
            style={{ width: "100%", height: "330px" }}
          ></img>
        </Col>

        {/* Users by Device */}
        <Col lg="4" md="6" sm="12" className="mb-4" style={{ width: "30%" }}>
          <UsersByDevice />
        </Col>

        {/* New Draft */}
        <Col lg="4" md="6" sm="12" className="mb-4" style={{ height: "500px" }}>
          <NewDraft />
        </Col>

        {/* Discussions */}
        <Col
          lg="5"
          md="12"
          sm="12"
          className="mb-4"
          style={{ height: "500px" }}
        >
          <Discussions />
        </Col>

        {/* Top Referrals */}
        <Col
          lg="3"
          md="12"
          sm="12"
          className="mb-4"
          style={{ height: "500px" }}
        >
          <TopReferrals />
        </Col>
      </Row>
    </Container>
  );
};

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Posts",
      value: "1000",
      percentage: "7,3%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Pages",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Comments",
      value: "8,147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "New Customers",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Subscribers",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;

import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  Button,
  CardHeader
} from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class ListRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    callApi("restaurants/all", "GET", null, headers).then(res => {
      console.log(res);
      if (res) {
        this.setState({
          restaurants: res.data.data
        });
      } else {
        this.setState({
          restaurants: []
        });
      }
    });
  }
  render() {
    const { restaurants } = this.state;
    if (restaurants.length === 0) {
      return (
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              sm="4"
              title="Danh sách nhà hàng"
              subtitle="nhà hàng"
              className="text-sm-left"
            />
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Xem danh sách nhà hàng</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <p style={{ marginLeft: "40%" }}>Không có nhà hàng nào</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="Danh sách nhà hàng"
            subtitle="nhà hàng"
            className="text-sm-left"
          />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Xem danh sách nhà hàng</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Số thứ tự
                      </th>
                      <th scope="col" className="border-0">
                        Tên nhà hàng
                      </th>
                      <th scope="col" className="border-0">
                        Hình ảnh
                      </th>
                      <th scope="col" className="border-0">
                        Email
                      </th>
                      <th scope="col" className="border-0">
                        Địa chỉ
                      </th>
                      <th scope="col" className="border-0">
                        Số điện thoại
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {restaurants.map((restaurant, index) => {
                      const { name, email, address, phone, image } = restaurant;
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>
                            <img
                              src={`http://202.191.56.159:2900/${image}`}
                              style={{ width: "250px" }}
                            ></img>
                          </td>
                          <td>{email}</td>
                          <td>{address}</td>
                          <td>{phone}</td>
                          <td>
                            <Button
                              theme="danger"
                              style={{
                                width: "60px",
                                margin: "5px",
                                padding: "5px"
                              }}
                            >
                              Chặn
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListRestaurant;

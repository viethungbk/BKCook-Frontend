import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../../components/common/PageTitle";

class ListUser extends Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Danh sách người dùng"
            subtitle="người dùng"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Xem danh sách người dùng</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        Số thứ tự
                      </th>
                      <th scope="col" className="border-0">
                        tên người sử dụng
                      </th>
                      <th scope="col" className="border-0">
                        Email
                      </th>
                      <th scope="col" className="border-0">
                        Ngày tạo
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.props.children}</tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListUser;

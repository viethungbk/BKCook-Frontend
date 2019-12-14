
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Badge,
  Button
} from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Danh sách công thức</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Số thứ tự
                  </th>
                    <th scope="col" className="border-0">
                      Tên công thức
                  </th>
                    <th scope="col" className="border-0">
                      Miêu tả công thức
                  </th>
                    <th scope="col" className="border-0">
                      Image
                  </th>
                    <th scope="col" className="border-0">
                      Nguyên liệu
                  </th>
                    <th scope="col" className="border-0">
                      Ngày tạo
                  </th>
                    <th scope="col" className="border-0">
                      Trạng thái
                  </th>
                    <th scope="col" className="border-0">
                      Độ khó
                  </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                </tbody>

              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
};
export default RecipeList;

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
    const { catName } = this.props;
    return (
      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0 ml-5">Công thức các món {catName} </h6>
            </CardHeader>
            <CardBody className="p-0 pb-3 pl-3 pr-3">
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
                      Giới thiệu công thức
                  </th>
                    <th scope="col" className="border-0">
                      Hình ảnh
                  </th>
                    <th scope="col" className="border-0">
                      Ngày tạo
                  </th>
                    <th scope="col" className="border-0">
                      Trạng thái
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
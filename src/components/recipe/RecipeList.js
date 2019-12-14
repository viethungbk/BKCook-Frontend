
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
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
                      id
                  </th>
                    <th scope="col" className="border-0">
                      Name Recipe
                  </th>
                    <th scope="col" className="border-0">
                      Author
                  </th>
                    <th scope="col" className="border-0">
                      Image
                  </th>
                    <th scope="col" className="border-0">
                      Recipe's Material
                  </th>
                    <th scope="col" className="border-0">
                      Create Date
                  </th>
                    <th scope="col" className="border-0">
                      Status
                  </th>
                    <th scope="col" className="border-0">
                      Action
                  </th>
                  </tr>
                </thead>
                <RecipeItem>
                  {this.props.children}
                </RecipeItem>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
};


export default RecipeList;
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReadMoreReact from 'read-more-react';
import {
  Container, Row, Col, Card, CardHeader, CardBody, Button
} from "shards-react";
import Material from "./Material";
import Step from "./Step";
class RecipeItem extends Component {
  render() {
    var { recipe, index } = this.props;
    return (
      <tr key={index}>
        <td>1</td>
        <td>{recipe.title}</td>
        <td><img
          src={recipe.image}
          width="180"
          height="150"
          style={{ marginRight: '10px' }}
        /></td>
        <td><Material /></td>
        <td>{recipe.shortDescription}</td>
        <td>{recipe.time}</td>
        <td>
          <Button>
            {recipe.level}
          </Button>
        </td>
        <td>
          <Button theme="secondary" style={{ width: '60px', margin: '5px', padding: '5px' }}>
            Chi tiết
                      </Button><br></br>
          <Button theme="warning" style={{ width: '60px', margin: '5px', padding: '5px' }}>
            Chỉnh sửa
                      </Button><br></br>
          <Button theme="danger" style={{ width: '60px', margin: '5px', padding: '5px' }}>
            Xóa
                      </Button>
        </td>
      </tr>
    )
  }
}


export default RecipeItem;

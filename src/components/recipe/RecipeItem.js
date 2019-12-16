import React, { Component } from "react";
import PropTypes from "prop-types";
import ReadMoreReact from "read-more-react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import Material from "./Material";
import Step from "./Step";
import { Link } from "react-router-dom";
class RecipeItem extends Component {
  onDelete = id => {
    if (confirm("Bạn chắc chắn muốn xóa ?")) {
      /* eslint no-restricted-globals:0 */
      this.props.onDelete(id);
    }
  };
  onStatus = id => {
    if (confirm("Duyệt công thức ?")) {
      // eslint no-restricted-globals:0
      this.props.onStatus(id);
    }
  };
  render() {
    var { recipe, index } = this.props;
    var recipeStatus = "";
    var recipeClass = "";
    switch (recipe.status) {
      case 1:
        recipeStatus = "ĐANG CHỜ DUYỆT";
        recipeClass = "btn-info";
        break;
      case -1:
        recipeStatus = "HỦY";
        recipeClass = "btn-danger";
        break;
      case 2:
        recipeStatus = "ĐÃ DUYỆT";
        recipeClass = "btn-success";
        break;
    }
    let button;
    if (recipe.status === 1) {
      button = (
        <Button
          className="btn-success"
          onClick={() => this.onStatus(recipe._id)}
          style={{ width: "60px", margin: "5px", padding: "5px" }}
        >
          DUYỆT
        </Button>
      );
    } else {
      button = <span></span>;
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{recipe.title}</td>

        <td style={{ width: "30%" }}>{recipe.shortDescription}</td>
        <td>
          <img
            src={`http://202.191.56.159:2900/${recipe.image}`}
            className="img-fluid mb-3"
            width="180"
            height="150"
            style={{ marginRight: "10px" }}
          />
        </td>
        <td>{recipe.dateCreated}</td>
        <td style={{ fontSize: "12px" }}>{recipeStatus}</td>
        <td>
          {button}
          <Button
            className="info"
            style={{ width: "60px", margin: "5px", padding: "5px" }}
          >
            <Link
              to={`/recipeDetail?id=${recipe._id}`}
              style={{ color: "white" }}
            >
              Chi tiết
            </Link>
          </Button>
          <br></br>
          <Button
            theme="danger"
            style={{ width: "60px", margin: "5px", padding: "5px" }}
            onClick={() => this.onDelete(recipe._id)}
          >
            Xóa
          </Button>
        </td>
      </tr>
    );
  }
}

export default RecipeItem;

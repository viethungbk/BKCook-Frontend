import React from "react";
import { Container, Row, Col, Card } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import RecipeItem from "../../components/recipe/RecipeItem";
import RecipeList from "../../components/recipe/RecipeList";

const queryString = require("query-string");

class RecipeListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    callApi(`recipes/filter?typeRecipe=${search.catName}`, "GET", null).then(
      res => {
        let recipes = [];
        if (res.data.data) {
          recipes = res.data.data.recipes;
        }
        this.setState({
          recipes
        });
      }
    );
  }
  onDelete = id => {
    var { recipes } = this.state;
    callApi("recipes/id", "DELETE", { idRecipe: id }).then(res => {
      if (res.status === 200) {
        alert("Đã xóa thành công");
        var index = this.findIndex(recipes, id);
        if (index !== -1) {
          recipes.splice(index, 1);
          this.setState({
            recipes: [...recipes]
          });
        }
      }
    });
  };

  onStatus = (id, status) => {
    var { location } = this.props;
    console.log(location.search);
    callApi("recipes/status", "POST", { _id: id, status: status }).then(res => {
      alert("Duyệt thành công");
    });
  };

  findIndex = (recipes, id) => {
    var result = -1;
    recipes.forEach((recipe, index) => {
      if (recipe.id === id) {
        result = index;
      }
    });
  };
  render() {
    var { recipes } = this.state;
    const search = queryString.parse(this.props.location.search);
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Danh sách công thức"
            subtitle="công thức"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <RecipeList catName={search.catName}>
                {this.showRecipes(recipes, search)}
              </RecipeList>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  showRecipes(recipes, search) {
    var result = null;
    if (recipes.length > 0) {
      result = recipes.map((recipe, index) => {
        if (recipe.typeRecipe == search.catName) {
          return (
            <RecipeItem
              key={index}
              recipe={recipe}
              index={index}
              onDelete={this.onDelete}
              onStatus={this.onStatus}
            />
          );
        }
      });
    }
    return result;
  }
}

export default RecipeListPage;

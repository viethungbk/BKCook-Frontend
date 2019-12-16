import React from "react";
import { Container, Row, Col, Card } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import RecipeItem from "../../components/recipe/RecipeItem";
import RecipeList from "../../components/recipe/RecipeList";

class ApproveRecipePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    callApi("recipes/ready", "GET", null).then(res => {
      console.log(res.data.data);
      let recipes = [];
      if (res.data.data) {
        recipes = res.data.data;
      }
      this.setState({
        recipes
      });
    });
  }
  onDelete = id => {
    var { recipes } = this.state;
    callApi(`recipes/${id}`, "DELETE", null).then(res => {
      if (res.status === 200) {
        console.log("============");
        var index = this.findIndex(recipes, id);
        if (index !== -1) {
          recipes.splice(index, 1);
          this.setState({
            recipes: [...recipes]
          });
          alert("Đã xóa thành công");
        }
      }
    });
  };
  onStatus = id => {
    let { recipes } = this.state;
    callApi("recipes/status", "POST", { idRecipe: id, status: 2 }).then(res => {
      var index = recipes.findIndex(item => item._id === id);
      if (index !== -1) {
        recipes.splice(index, 1);
        this.setState({
          recipes: [...recipes]
        });
        alert("Duyệt thành công");
      }
    });
  };

  render() {
    var { recipes } = this.state;
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
              <RecipeList>{this.showRecipes(recipes)}</RecipeList>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  showRecipes(recipes) {
    var result = null;
    if (recipes.length > 0) {
      result = recipes.map((recipe, index) => {
        return (
          <RecipeItem
            key={index}
            recipe={recipe}
            index={index}
            onDelete={this.onDelete}
            onStatus={this.onStatus}
          />
        );
      });
    }
    return result;
  }
}

export default ApproveRecipePage;

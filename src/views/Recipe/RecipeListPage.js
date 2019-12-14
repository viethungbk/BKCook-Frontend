import React from "react";
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
import axios from 'axios';
import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import RecipeItem from "../../components/recipe/RecipeItem";

class RecipeListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    callApi('', 'GET', null).then(res => {
      console.log(res.data)
      this.setState({
        recipes: res.data.data.blogs
      });
    });

  }
  render() {
    var { blogs } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
          <PageTitle title="Danh sách công thức" subtitle="recipe" className="text-sm-left mb-3" />
        </Row>
        <RecipeList>
          {this.showRecipes(recipes)}
        </RecipeList>
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
          />
        );
      });
    }
    return result;
  }
}

export default RecipeListPage;

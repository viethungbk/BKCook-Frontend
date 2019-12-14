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
import RecipeList from "../../components/recipe/RecipeList";

class RecipeListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }
  componentDidMount() {
    callApi('recipes/filter?tags=&typeRecipe=&level=1&processingMethod=&purpose=&countryCuisine&typeOfDish&season', 'GET', null).then(res => {
      this.setState({
        recipes: res.data.data.recipes
      });
    });
  }

  render() {
    var { recipes, categorys } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '20px' }}>
          <PageTitle title="Danh sách công thức" subtitle="recipe" className="text-sm-left mb-3" />
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <RecipeList>
                {this.showRecipes(recipes)}
              </RecipeList>
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
          />
        );
      });
    }
    return result;
  }
}

export default RecipeListPage;

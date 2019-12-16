import React from "react";
import { Container, Row, Col, Button } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import RecipeDetail1 from "../../components/recipe/RecipeDetail1";
import FormMaterial from "../../components/recipe/FormMaterial";
import FormStep from "../../components/recipe/FormStep";
import callApi from "./../../utils/apiCaller";
const queryString = require("query-string");
class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null
    };
  }

  componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    callApi(`recipes/id?idRecipe=${search.id}`, "GET", null).then(res => {
      // console.log("aaa", res.data);
      // var { data } = res.data;
      // let recipe = null;
      // if (data) {
      //     recipe = data;
      // }
      this.setState({
        recipe: res.data.data || null
      });
    });
  }
  onDelete = id => {
    var { history } = this.props;
    if (confirm("Bạn chắc chắn muốn xóa ?")) {
      /* eslint no-restricted-globals:0 */
      callApi("recipes/id", "DELETE", { idRecipe: id }).then(res => {
        if (res.status === 200) {
          alert("Đã xóa thành công");
          history.push("/recipeList");
        }
      });
    }
  };

  render() {
    var { recipe } = this.state;
    if (!recipe) {
      return <span>không có loại công thức</span>;
    }
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "20px" }}
        >
          <PageTitle
            title="Chi tiết công thức"
            subtitle="công thức"
            className="text-sm-left mb-3"
          />
          <Button
            theme="danger"
            style={{ width: "60px", padding: "5px", marginLeft: "50%" }}
            onClick={() => this.onDelete(recipe._id)}
          >
            Xóa
          </Button>
        </Row>
        <Row>
          <Col lg="4">
            <RecipeDetail1 recipe={recipe} />
          </Col>
          <Col lg="8">
            {recipe.materials && <FormMaterial material={recipe.materials} />}
            {recipe.steps && <FormStep step={recipe.steps} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeDetail;

import React from "react";
import { Container, Row } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: []
    };
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    let headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data"
    };
    callApi("categories/", "GET", null, headers).then(res => {
      if (res.data.data) {
        this.setState({
          categorys: res.data.data
        });
      } else {
        this.setState({
          categorys: []
        });
      }
    });
  }

  render() {
    var { categorys } = this.state;
    if (categorys.length === 0) {
      return <span>không có loại công thức</span>;
    }
    return (
      <Container fluid className="main-content-container px-4">
        <Row
          noGutters
          className="page-header"
          style={{ margin: "0px", padding: "15px", marginTop: "30px" }}
        >
          <PageTitle
            title="Danh sách công thức"
            subtitle="recipe"
            className="text-sm-left mb-3"
          />
        </Row>
        <Row style={{ padding: "15px" }}>
          {categorys.map((cat, index) => {
            const { image, title } = cat;
            return (
              <div
                className="recommend-cuisine-box row10"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "15px",
                  width: "15%",
                  marginRight: "15px",
                  marginBottom: "20px"
                }}
                key={index}
              >
                <img
                  className="ico"
                  src={`http://202.191.56.159:2900/${image}`}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    marginLeft: "50px",
                    marginTop: "10px"
                  }}
                />
                <br></br>
                <p className="text-center" style={{ margin: "5px" }}>
                  <Link to={`/recipeList?catName=${title}`}>{title}</Link>
                </p>
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default CategoryPage;

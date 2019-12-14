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

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [
        {
          image: '../../images/category/1.png',
          catName: 'Ăn sáng'
        },
        {
          image: '../../images/category/2.png',
          catName: 'Ăn vặt'
        },
        {
          image: '../../images/category/3.png',
          catName: 'Khai vị'
        },
        {
          image: '../../images/category/4.png',
          catName: 'Món chay'
        },
        {
          image: '../../images/category/5.png',
          catName: 'Món chính'
        },
        {
          image: '../../images/category/6.png',
          catName: 'Nhanh-Dễ'
        },
        {
          image: '../../images/category/7.png',
          catName: 'Làm bánh'
        },
        {
          image: '../../images/category/8.png',
          catName: 'Healthy'
        },
        {
          image: '../../images/category/9.png',
          catName: 'Thức uống'
        },
        {
          image: '../../images/category/10.png',
          catName: 'Salad'
        },
        {
          image: '../../images/category/11.png',
          catName: 'Nước chấm'
        },
        {
          image: '../../images/category/12.png',
          catName: 'Pasta - Spagheti'
        },
        {
          image: '../../images/category/13.png',
          catName: 'Gà'
        },
        {
          image: '../../images/category/14.png',
          catName: 'Snacks'
        },
        {
          image: '../../images/category/15.png',
          catName: 'Bún - mì - Phở'
        },
        {
          image: '../../images/category/16.png',
          catName: 'Lẩu'
        },

      ]
    };
  }

  render() {
    console.log(this.state);
    var { categorys } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header" style={{ margin: '0px', padding: '15px', marginTop: '30px' }}>
          <PageTitle title="Danh sách công thức" subtitle="recipe" className="text-sm-left mb-3" />
        </Row>
        <Row style={{ padding: '15px' }}>
          {categorys.map(({image, catName}, index) => {
            // console.log(cat.image);
            // const {image} = cat;
            console.log(image);
            return (<div className="recommend-cuisine-box row10" style={{ background: 'white', padding: '10px', borderRadius: '15px', width: '15%', marginRight: '20px', marginBottom: '20px' }} key={index}>
              <br></br>
              <p className="text-center" style={{ margin: '5px' }}>{catName}</p>
            </div>)
            
          })}
        </Row>
      </Container>
    )
  }
}

export default CategoryPage;

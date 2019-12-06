import React from 'react'
import ItemRecipe from './ItemRecipe'
import { showListItem } from '../../../actions/function'

const listRecipe = [
  {
    name: 'Creme Brulee French Toast',
    link: '/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast',
    imageLink: 'https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG',
    author: { authorName: 'La Funie', authorLink: '/thanh-vien/lafunie' },
    timeToDo: '25p',
    view: ' 2.61K'
  },
  {
    name: 'Creme Brulee French Toast',
    link: '/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast',
    imageLink: 'https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG',
    author: { authorName: 'La Funie', authorLink: '/thanh-vien/lafunie' },
    timeToDo: '25p',
    view: ' 2.61K'
  },
  {
    name: 'Creme Brulee French Toast',
    link: '/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast',
    imageLink: 'https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG',
    author: { authorName: 'La Funie', authorLink: '/thanh-vien/lafunie' },
    timeToDo: '25p',
    view: ' 2.61K'
  },
  {
    name: 'Creme Brulee French Toast',
    link: '/cong-thuc/creme-brulee-french-toast-45697?itm_source=home_z3_p1_chefrecipe&itm_medium=desktop&itm_content=recipe&itm_campaign=Creme+Brulee+French+Toast',
    imageLink: 'https://media.cooky.vn/recipe/g5/45697/s320x240/cooky-recipe-636845236726606786.JPG',
    author: { authorName: 'La Funie', authorLink: '/thanh-vien/lafunie' },
    timeToDo: '25p',
    view: ' 2.61K'
  }
]

class ListRecipe extends React.Component {
  render() {
    let { title, isShowFull } = this.props;
    return (
      <div className="container-fluid">
        <h5 className='card-title'>{title}</h5>
        <hr />
        <div className="row">
          {showListItem(listRecipe, ItemRecipe, isShowFull)}
        </div>
      </div>
    );
  }
}

export default ListRecipe;
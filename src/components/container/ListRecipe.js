import React from 'react';
import ItemRecipe from './ItemRecipe';

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
  renderListRecipe() {
    return listRecipe.map((recipe, key) => {
      let { name, link, imageLink, author, timeToDo, view } = recipe;
      return (
          <ItemRecipe 
            key={key}
            name={name} 
            link={link} 
            imageLink={imageLink} 
            author={author} 
            timeToDo={timeToDo} 
            view={view} 
          />
        )
    });
  }

  render() {
    // cong thuc boi cooky la 0, cong thuc boi user la 1
    let { title, typeRecipe } = this.props;
    return (
      <div className={typeRecipe === 1 ? 'dining-recipes-box home-top-recipes home-top-box' : 'home-top-box'}>
        <div className="headline">
          <h2>{title}</h2>
        </div>
        <div className={typeRecipe === 1 ? 'row recipes-list row10' : 'row recipes-list row'}>
          <div className={typeRecipe === 1 ? 'top-recipes-user' : 'top-recipes'}>
            {this.renderListRecipe()}
          </div>
        </div>
      </div>
    );
  }
}

export default ListRecipe;
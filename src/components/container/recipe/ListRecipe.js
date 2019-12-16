import React from 'react'
import ItemRecipe from './ItemRecipe'
import { showListItem } from '../../../actions/function'
import Pagination from '../Pagination'

const ListRecipe = ({ title, isShowFull, recipes, totalRecords, handlePaginate }) => {
  console.log(recipes)
  return (
    <div className="container-fluid">
      <h5 className='card-title'>{title}</h5>
      <hr />
      <div className="row">
        {showListItem(recipes, ItemRecipe, isShowFull)}
      </div>
      <Pagination totalItem={totalRecords} handlePaginate={handlePaginate} paginateFor='recipe' />

    </div>
  )
}

export default ListRecipe
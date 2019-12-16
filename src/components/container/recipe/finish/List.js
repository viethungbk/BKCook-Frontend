import React from 'react'
import Item from './Item'
import { isArray } from 'util'

// import { showListItem } from '../../../../actions/function'

// const items = [
//   { _id: '1', label: 'Món khai vị 1' },
//   { _id: '2', label: 'Món khai vị 2' },
//   { _id: '3', label: 'Món khai vị 3' },
//   { _id: '4', label: 'Món khai vị 4' },
//   { _id: '5', label: 'Món khai vị 5' },
//   { _id: '6', label: 'Món khai vị 6' },
//   { _id: '7', label: 'Món khai vị 7' },
//   { _id: '8', label: 'Món khai vị 8' },
//   { _id: '8', label: 'Món khai vị 9' },
//   { _id: '10', label: 'Món khai vị 10' },
//   { _id: '11', label: 'Món khai vị 11' },
//   { _id: '12', label: 'Món khai vị 12' },
// ]

// const list = [
//   { 
//     category: 'typeRecipe',
//     item: [
//       { _id: 'typeRecipe 1', label: 'Món khai vị 1' },
//       { _id: 'typeRecipe 2', label: 'Món khai vị 2' },
//       { _id: 'typeRecipe 3', label: 'Món khai vị 3' },
//       { _id: 'typeRecipe 4', label: 'Món khai vị 4' }
//     ]
//   },
//   { 
//     category: 'countryCuisine',
//     item: [
//       { _id: 'countryCuisine 1', label: 'Việt Nam 1' },
//       { _id: 'countryCuisine 2', label: 'Việt Nam 2' },
//       { _id: 'countryCuisine 3', label: 'Việt Nam 3' },
//       { _id: 'countryCuisine 4', label: 'Việt Nam 4' }
//     ]
//   },
//   { 
//     category: 'processingMethod',
//     item: [
//       { _id: 'processingMethod 1', label: 'Luộc 1' },
//       { _id: 'processingMethod 2', label: 'Luộc 2' },
//       { _id: 'processingMethod 3', label: 'Luộc 3' },
//       { _id: 'processingMethod 4', label: 'Luộc 4' }
//     ]
//   },
//   { 
//     category: 'purpose',
//     item: [
//       { _id: 'purpose 1', label: 'Ăn sáng 1' },
//       { _id: 'purpose 2', label: 'Ăn sáng 2' },
//       { _id: 'purpose 3', label: 'Ăn sáng 3' },
//       { _id: 'purpose 4', label: 'Ăn sáng 4' }
//     ]
//   },
//   { 
//     category: 'tags',
//     item: [
//       { _id: 'tags 1', label: 'gà nướng 1' },
//       { _id: 'tags 2', label: 'gà nướng 2' },
//       { _id: 'tags 3', label: 'gà nướng 3' },
//       { _id: 'tags 4', label: 'gà nướng 4' }
//     ]
//   }
// ]

const List = ({ item, handleChange }) => {
  let { category, list } = item
  let { categoryName } = category

  const showListItem = () => {
    let result = ''

    if (isArray(list) && list.length > 0) {
      result = list.map((itemInList, index) => {
        return <Item key={index} item={itemInList} category={category} handleChange={handleChange} />
      })
    }

    return result
  }

  return (
    <div className='row'>
      <div className='col-md-12'>
        <h5>{categoryName}</h5>
      </div>
      {showListItem()}
      {/* <List category='processingMethod' handleChange={handleChange} /> */}
    </div>
  )
}

export default List
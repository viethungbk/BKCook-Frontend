import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import List from '../../components/container/recipe/finish/List'
import { recipeActions } from '../../actions/recipeActions'


const lists = [
  {
    category: { categoryId: 'typeRecipe', categoryName: 'Công thức' },
    list: [
      { _id: 'typeRecipe 1', label: 'Món khai vị 1' },
      { _id: 'typeRecipe 2', label: 'Món khai vị 2' },
      { _id: 'typeRecipe 3', label: 'Món khai vị 3' },
      { _id: 'typeRecipe 4', label: 'Món khai vị 4' }
    ]
  },
  {
    category: { categoryId: 'processingMethod', categoryName: 'Cách thức thực hiện' },
    list: [
      { _id: 'processingMethod 1', label: 'Luộc 1' },
      { _id: 'processingMethod 2', label: 'Luộc 2' },
      { _id: 'processingMethod 3', label: 'Luộc 3' },
      { _id: 'processingMethod 4', label: 'Luộc 4' }
    ]
  },
  {
    category: { categoryId: 'purpose', categoryName: 'Mục đích (tốt cho)' },
    list: [
      { _id: 'purpose 1', label: 'Ăn sáng 1' },
      { _id: 'purpose 2', label: 'Ăn sáng 2' },
      { _id: 'purpose 3', label: 'Ăn sáng 3' },
      { _id: 'purpose 4', label: 'Ăn sáng 4' }
    ]
  },
  {
    category: { categoryId: 'tags', categoryName: 'Gắn thẻ' },
    list: [
      { _id: 'tags 1', label: 'gà nướng 1' },
      { _id: 'tags 2', label: 'gà nướng 2' },
      { _id: 'tags 3', label: 'gà nướng 3' },
      { _id: 'tags 4', label: 'gà nướng 4' }
    ]
  }
]

const country = ['Việt Nam 1', 'Việt Nam 2', 'Việt Nam 3', 'Việt Nam 4']

const AddFinish = () => {
  const dispatch = useDispatch()
  let { recipe } = useSelector(state => state.recipeReducer)
  const [state, setState] = useState({
    typeRecipe: [],
    countryCuisine: '',
    processingMethod: [],
    purpose: [],
    tags: []
  })



  const handleChange = (category, label, checked) => {
    let { categoryId } = category
    let newCat = state[categoryId]
    if (checked) {
      newCat.push(label)
      setState({
        ...state,
        [categoryId]: newCat
      })
    } else {
      newCat = state[categoryId].filter(item => item !== label)

      setState({
        ...state,
        [categoryId]: [...newCat]
      })
    }
  }

  const handleChangeCountry = (e) => {
    setState({
      ...state,
      countryCuisine: e.target.value
    })
  }

  const handleClick = () => {
    let { typeRecipe, countryCuisine, processingMethod, purpose, tags } = state
    let body = {
      idRecipe: recipe._id,
      typeRecipe, countryCuisine, processingMethod, purpose, tags
    }
    console.log(body)

    dispatch(recipeActions.addRecipeFinish(body))
  }

  return (
    <Layout>
      <div className='mt-100 mb-100'>
        <div className='container'>
          <h4>Phân loại công thức</h4>
          <hr />
          <div className='row'>
            <div className='col-md-12'>
              <h5>Ẩm thực (Quốc gia)</h5>
              <div className="form-group">
                <select className="form-control" id="countryCuisine" name='countryCuisine' value={state.countryCuisine} onChange={handleChangeCountry}>
                  {
                    country.map((label, index) => <option key={index}>{label}</option>)
                  }
                </select>
              </div>
            </div>
          </div>
          {
            lists.map((item, index) => {
              return (
                <List key={index} item={item} handleChange={handleChange} />
              )
            })
          }
          {/* <div className='row'>
            <div className='col-md-12'>
              <h5>Công thức</h5>
            </div>
            <List category='typeRecipe' handleChange={handleChange} />
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5>Ẩm thực</h5>
            </div>
            <List category='countryCuisine' handleChange={handleChange} />
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5>Cách thức thực hiện</h5>
            </div>
            <List category='processingMethod' handleChange={handleChange} />
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5>Mục đích (tốt cho)</h5>
            </div>
            <List category='purpose' handleChange={handleChange} />
          </div> */}
          <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Đăng công thức</button>
        </div>
      </div>
    </Layout>
  )
}

export default AddFinish
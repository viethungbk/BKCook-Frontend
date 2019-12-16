import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import List from '../../components/container/recipe/finish/List'
import { recipeActions } from '../../actions/recipeActions'
import { tagActions } from '../../actions/tagActions'

const lists = [
  {
    category: { categoryId: 'typeRecipe', categoryName: 'Công thức' },
    list: [
      { _id: 'typeRecipe 1', label: 'Món khai vị' },
      { _id: 'typeRecipe 2', label: 'Món tráng miệng' },
      { _id: 'typeRecipe 3', label: 'Món chay' },
      { _id: 'typeRecipe 4', label: 'Món chính' },
      { _id: 'typeRecipe 5', label: 'Món ăn sáng' },
      { _id: 'typeRecipe 6', label: 'Nhanh và dễ' },
      { _id: 'typeRecipe 7', label: 'Thức uống' },
      { _id: 'typeRecipe 8', label: 'Bánh - Bánh ngọt' },
      { _id: 'typeRecipe 9', label: 'Món ăn cho trẻ' },
      { _id: 'typeRecipe 10', label: 'Món nhậu' },
    ]
  },
  {
    category: { categoryId: 'processingMethod', categoryName: 'Cách thức thực hiện' },
    list: [
      { _id: 'processingMethod 1', label: 'Nướng' },
      { _id: 'processingMethod 2', label: 'Chiên' },
      { _id: 'processingMethod 3', label: 'Lẩu' },
      { _id: 'processingMethod 4', label: 'Luộc' },
      { _id: 'processingMethod 5', label: 'Hầm' },
      { _id: 'processingMethod 6', label: 'Hấp' },
      { _id: 'processingMethod 7', label: 'Xào' },
      { _id: 'processingMethod 8', label: 'Trộn' },
      { _id: 'processingMethod 9', label: 'Xay' },
      { _id: 'processingMethod 10', label: 'Ép' },
      { _id: 'processingMethod 11', label: 'Kho' },
      { _id: 'processingMethod 12', label: 'Om' },
      { _id: 'processingMethod 13', label: 'Sốt' },
      { _id: 'processingMethod 14', label: 'Nấu' },
      { _id: 'processingMethod 15', label: 'Pha chế' },
    ]
  },
  {
    category: { categoryId: 'purpose', categoryName: 'Mục đích (tốt cho)' },
    list: [
      { _id: 'purpose 1', label: 'Ăn sáng 1' },
      { _id: 'purpose 2', label: 'Ăn trưa' },
      { _id: 'purpose 3', label: 'Ăn kiêng' },
      { _id: 'purpose 4', label: 'Giảm cân' },
      { _id: 'purpose 5', label: 'Cho phái mạnh' },
      { _id: 'purpose 6', label: 'Ăn vặt' },
      { _id: 'purpose 7', label: 'Tiệc' },
      { _id: 'purpose 8', label: 'Ăn chay' },
      { _id: 'purpose 9', label: 'Chữa bệnh' },
      { _id: 'purpose 10', label: 'Ăn gia đình' },
      { _id: 'purpose 11', label: 'Phụ nữ sau khi sinh' },
      { _id: 'purpose 12', label: 'Phụ nữ mang thai' },
      { _id: 'purpose 12', label: 'Trẻ dưới 1 tuổi' },
      { _id: 'purpose 14', label: 'Tốt cho sức khỏe' },
      { _id: 'purpose 15', label: 'Tốt cho tim mạch' },
      { _id: 'purpose 16', label: 'Cho phái nữ' }
    ]
  }
]

const country = [
  'Việt Nam', 'Thái Lan', 'Hàn Quốc', 'Ý', 'Nhật Bản', 'Trung Quốc',
  'Ấn Độ', 'Singapore', 'Pháp', 'Mỹ', 'Úc', 'Mexico', 'Nga', 'Indonesia', 'Philippines'
]

const AddFinish = () => {
  const dispatch = useDispatch()
  let { recipe } = useSelector(state => state.recipeReducer)
  const [state, setState] = useState({
    typeRecipe: [],
    countryCuisine: 'Việt Nam',
    processingMethod: [],
    purpose: [],
    tag: ''
    // tags: recipe.tags
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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(tagActions.addTag(state.tag))
    setState({ ...state, tag: '' })
  }

  const handleChangeTag = (e) => {
    setState({ ...state, tag: e.target.value })
  }

  const handleChangeCountry = (e) => {
    setState({
      ...state,
      countryCuisine: e.target.value
    })
  }

  const handleClick = () => {
    let { typeRecipe, countryCuisine, processingMethod, purpose } = state
    let { tags } = recipe
    tags = tags.map(tag => tag.label)
    let body = {
      idRecipe: recipe._id,
      typeRecipe, countryCuisine, processingMethod, purpose, tags
    }
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
          <div className='row'>
            {
              lists.map((item, index) => {
                return (
                  <List key={index} item={item} handleChange={handleChange} />
                )
              })
            }
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5>Gắn thẻ</h5>

            </div>

            <div className='col-md-6 col-sm-12'>
              <form className="form-inline" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Nhập tên thẻ" name='tag' value={state.tag} onChange={handleChangeTag} />
                <button type="submit" className="btn btn-primary mb-2">Thêm</button>
              </form>
            </div>
            {
              recipe.tags.length > 0 && (
                <div className='col-md-6 col-sm-12'>
                  <div className='row'>
                    {
                      recipe.tags.map((tag, index) => (
                        <div className='col-md-3' key={index}>
                          <h2><span className="badge badge-secondary">{tag.label}</span></h2>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            }

          </div>

          <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Đăng công thức</button>
        </div>
      </div>
    </Layout>
  )
}

export default AddFinish
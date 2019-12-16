import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Layout from '../../components/Layout'
import { recipeActions } from '../../actions/recipeActions'
import Loading from '../../components/Loading'

const AddBasicInfo = ({ basicInfoRequesting }) => {
  const dispatch = useDispatch()
  let [state, setState] = useState({
    title: '',
    image: null,
    shortDescription: '',
    level: '0',
    time: '0'
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleChangeImage = (e) => {
    setState({ ...state, image: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let { title, image, shortDescription, level, time } = state
    let basicInfo = { title, image, shortDescription, level, time }

    dispatch(recipeActions.addRecipeBasicInfo(basicInfo))
  }

  return (
    <Layout>
      <div className='mt-100 mb-100'>
        <div className='container'>
          <div className='row'>
            <h4 className='mx-auto'>Tạo mới và chia sẻ công thức</h4>
          </div>
          <div className='row mt-10'>
            <form onSubmit={handleSubmit} className='mx-auto'>
              <div className="form-group">
                <label htmlFor="title">Tên công thức</label>
                <input id="title" className="form-control" placeholder="Nhập tên công thức" type="text" name='title' value={state.title} onChange={handleChange} required={true} />
              </div>
              <div className="form-group">
                <label htmlFor="image">Chọn ảnh cho công thức</label>
                <div className="file-field">
                  <div className="d-flex">
                    <div className="btn btn-mdb-color btn-rounded float-left">
                      <input id='image' type="file" name='image' onChange={handleChangeImage} required={true} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="shortDescription">Mô tả</label>
                <textarea id='shortDescription' className="form-control" placeholder='Nhập mô tả' rows="5" name='shortDescription' value={state.shortDescription} onChange={handleChange} />
              </div>
              <div className="row">
                <div className="col">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="level">Độ khó</label>
                    </div>
                    <select className="custom-select" id="level" name='level' value={state.level} onChange={handleChange} required={true}>
                      <option defaultValue='0'>Rất dễ</option>
                      <option value="1">Dễ</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khó</option>
                      <option value="4">Rất khó</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <input id='time' placeholder="Thời gian (phút)" className="form-control" type="number" name='time' value={state.time} onChange={handleChange} required={true} />
                </div>
              </div>

              <button type="submit" className="btn btn-outline-primary">Lưu và tiếp tục</button>
              <Loading isLoading={basicInfoRequesting} />
            </form>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export default AddBasicInfo
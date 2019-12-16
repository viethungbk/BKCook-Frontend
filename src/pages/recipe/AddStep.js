import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import List from '../../components/container/recipe/step/List'
import { stepActions } from '../../actions/stepActions'
import { recipeActions } from '../../actions/recipeActions'
import Loading from '../../components/Loading'

const AddStep = () => {
  const dispatch = useDispatch()
  let { recipe, oneStepRequesting } = useSelector(state => state.recipeReducer)
  let { steps } = useSelector(state => state.recipeReducer.recipe)

  const [state, setState] = useState({
    stepNumber: 0,
    description: '',
    image: null
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
    let { stepNumber, description, image } = state
    
    let body = {
      idRecipe: recipe._id,
      stepNumber, description, image
    }
    dispatch(stepActions.addStep(body))
    setState({
      ...state,
      image: null,
      stepNumber: 0,
      description: ''
    })
  }

  const handleClick = () => {
    dispatch(recipeActions.addRecipeStepFinish())
  }

  return (
    <Layout>
      <div className='mt-100 mb-100'>
        <div className='container'>
          <div className='row'>
            <div className="table-responsive">
              <h5>Danh sách bước</h5>
              <br />
              {
                steps.length > 0 
                  ? (<List steps={steps} />) 
                  : ('Bạn chưa có bước nào')
              }
            </div>
          </div>
          <hr />
          <div className='row'>
            <div className='col-4-md col-12-sm mr-5'>
              <h5>Thêm bước</h5>
            </div>
            <div className='col-8-md col-12-sm'>
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <label htmlFor="stepNumber">Bước</label>
                    <input type="number" className="form-control" id="stepNumber" name='stepNumber' value={state.stepNumber} onChange={handleChange} required={true} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <label htmlFor="description">Mô tả chi tiết</label>
                    <textarea className="form-control" rows="5" id="description" name='description' value={state.description} onChange={handleChange} required={true} />
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-sm-10'>
                    <div className="form-group">
                      <label htmlFor="image">Chọn ảnh</label>
                      <div className="file-field">
                        <div className="d-flex">
                          <div className="btn btn-mdb-color btn-rounded float-left">
                            <input id='image' type="file" name='image' onChange={handleChangeImage} required={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Thêm</button>
                    <Loading isLoading={oneStepRequesting} />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Lưu và tiếp tục</button>

        </div>
      </div>
    </Layout>
  )
}

export default AddStep
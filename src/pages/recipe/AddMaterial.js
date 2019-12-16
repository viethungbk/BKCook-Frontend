import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import List from '../../components/container/recipe/material/List'
import { materialActions } from '../../actions/materialActions'
import { recipeActions } from '../../actions/recipeActions'
import Loading from '../../components/Loading'

const AddMaterial = () => {
  const dispatch = useDispatch();
  const { recipe, materialRequesting } = useSelector(state => state.recipeReducer)
  let { materials } = useSelector(state => state.recipeReducer.recipe);

  const [state, setState] = useState({
    name: '',
    unit: '',
    quantitative: 0,
  });

  const handleChange = (e) => {
    let { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let { name, unit, quantitative } = state
    let material = { name, unit, quantitative }
    dispatch(materialActions.addMaterial(material))
    setState({
      name: '',
      unit: '',
      quantitative: 0
    })
  }

  const handleClick = () => {
    let { _id } = recipe
    materials = materials.map(material => {
      delete material._id
      return material
    })
    let body = { idRecipe: _id, materials }
    console.log(body, 'AddMaterial')
    dispatch(recipeActions.addRecipeMaterial(body))
  }

  return (
    <Layout>
      <div className='mt-100 mb-100'>
        <div className='container'>
          <div className='row'>
            <div className="table-responsive">
              <h5>Danh sách nguyên vật liệu</h5>
              <br />
              {
                materials.length > 0 ? (
                  <List materials={materials} />
                ) : (
                    'Bạn chưa thêm nguyên vật liệu'
                  )
              }
            </div>
          </div>

          <hr />

          <div className='row'>
            <div className='col-4-md col-12-sm mr-3'>
              <h5>Thêm nguyên liệu</h5>
            </div>

            <div className='col-8-md col-12-sm'>
              <form className="form-inline" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="name">Tên nguyên liệu</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="name" placeholder="Tên nguyên liệu" name='name' value={state.name} onChange={handleChange} required={true} />
                <label className="sr-only" htmlFor="unit">Đơn vị đo</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="unit" placeholder="Đơn vị đo" name='unit' value={state.unit} onChange={handleChange} required={true} />
                <label className="sr-only" htmlFor="quantitative">Lượng nguyên liệu cần thiết</label>
                <input type="number" className="form-control mb-2 mr-sm-2" id="quantitative" placeholder="Lượng nguyên liệu cần thiết" name='quantitative' value={state.quantitative} onChange={handleChange} required={true} />

                <button type="submit" className="btn btn-primary mb-2">Thêm</button>
              </form>
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Lưu và tiếp tục</button>
              <Loading isLoading={materialRequesting} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddMaterial;
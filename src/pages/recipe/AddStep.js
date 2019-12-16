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
    // let step = { stepNumber, description }
    let body = {
      idRecipe: recipe._id,
      stepNumber, description, image
    }
    dispatch(stepActions.addStep(body))
    setState({
      ...state,
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
                steps.length > 0 ? (
                  <List steps={steps} />
                ) : (
                    'Bạn chưa có bước nào'
                  )
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
                    <input type="number" className="form-control" id="stepNumber" name='stepNumber' value={state.stepNumber} onChange={handleChange} />
                  </div>


                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <label htmlFor="description">Mô tả chi tiết</label>
                    <textarea className="form-control" rows="5" id="description" name='description' value={state.description} onChange={handleChange}></textarea>
                  </div>
                </div>
                <div className='form-group row'>
                  <div className='col-sm-10'>
                    <div className="input-group mb-3">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="image" name='image' onChange={handleChangeImage} />
                        <label className="custom-file-label" htmlFor="image">Chọn ảnh</label>
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

// class AddStep extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       stepNumber: 1,
//       description: ''
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleChange(e) {
//     let { name, value } = e.target
//     this.setState({ [name]: value })
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//   }

//   handleClick() {

//   }
//   render() {
//     let { steps } = this.props
//     let { stepNumber, description } = this.state

//     return (
      // <Layout>
      //   <div className='mt-100 mb-100'>
      //     <div className='container'>
      //       <div className='row'>
      //         <div className="table-responsive">
      //           <h5>Danh sách bước</h5>
      //           <br />
      //           {
      //             steps.length > 0 ? (
      //               <List steps={steps} />
      //             ) : (
      //                 'Bạn chưa có bước nào'
      //               )
      //           }
      //         </div>
      //       </div>

      //       <hr />

      //       <div className='row'>
      //         <div className='col-4-md col-12-sm mr-3'>
      //           <h5>Thêm bước</h5>
      //         </div>

      //         <div className='col-8-md col-12-sm'>
      //           <form>
      //             <div className="form-group row">
      //               <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      //               <div className="col-sm-10">
      //                 <input type="email" className="form-control" id="inputEmail3" />
      //               </div>
      //             </div>
      //             <div className="form-group row">
      //               <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      //               <div className="col-sm-10">
      //                 <input type="password" className="form-control" id="inputPassword3" />
      //               </div>
      //             </div>
      //             <fieldset className="form-group">
      //               <div className="row">
      //                 <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      //                 <div className="col-sm-10">
      //                   <div className="form-check">
      //                     <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
      //                     <label className="form-check-label" htmlFor="gridRadios1">
      //                       First radio
      //           </label>
      //                   </div>
      //                   <div className="form-check">
      //                     <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
      //                     <label className="form-check-label" htmlFor="gridRadios2">
      //                       Second radio
      //           </label>
      //                   </div>
      //                   <div className="form-check disabled">
      //                     <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
      //                     <label className="form-check-label" htmlFor="gridRadios3">
      //                       Third disabled radio
      //           </label>
      //                   </div>
      //                 </div>
      //               </div>
      //             </fieldset>
      //             <div className="form-group row">
      //               <div className="col-sm-2">Checkbox</div>
      //               <div className="col-sm-10">
      //                 <div className="form-check">
      //                   <input className="form-check-input" type="checkbox" id="gridCheck1" />
      //                   <label className="form-check-label" htmlFor="gridCheck1">
      //                     Example checkbox
      //         </label>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="form-group row">
      //               <div className="col-sm-10">
      //                 <button type="submit" className="btn btn-primary">Sign in</button>
      //               </div>
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //       <button type="button" className="btn btn-outline-primary" onClick={this.handleClick}>Lưu và tiếp tục</button>

      //     </div>
      //   </div>
      // </Layout>
//     );
//   }
// }

// const mapStateToProps = state => {
//   let { steps } = state.recipeReducer.recipe
//   return { steps }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddStep)
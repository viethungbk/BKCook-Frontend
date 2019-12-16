import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { recipeActions } from '../../actions/recipeActions'
import Loading from '../../components/Loading'

class AddBasicInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      image: null,
      shortDescription: '',
      level: '',
      time: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
  }

  handleChange(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleChangeImage(e) {
    this.setState({ ...this.state, image: e.target.files[0] })
  }
  handleSubmit(e) {
    e.preventDefault()
    let { title, image, shortDescription, level, time } = this.state
    let basicInfo = { title, image, shortDescription, level, time }
    
    this.props.addRecipe(basicInfo)
  }

  render() {
    let { basicInfoRequesting } = this.props
    let { title, image, shortDescription, level, time } = this.state

    return (
      <Layout>
        <div className='mt-100 mb-100'>
          <div className='container'>
            <div className='row'>
              <h4 className='mx-auto'>Tạo mới và chia sẻ công thức</h4>
            </div>
            <div className='row mt-10'>
              <form onSubmit={this.handleSubmit} className='mx-auto'>
                <div className="form-group">
                  <label htmlFor="title">Tên công thức</label>
                  <input id="title" className="form-control" placeholder="Nhập tên công thức" type="text" name='title' value={title} onChange={this.handleChange} required={true} />
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="image" name='image' onChange={this.handleChangeImage} />
                      <label className="custom-file-label" htmlFor="image">Chọn ảnh cho công thức</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="shortDescription">Mô tả</label>
                  <textarea id='shortDescription' className="form-control" placeholder='Nhập mô tả' rows="5" name='shortDescription' value={shortDescription} onChange={this.handleChange} />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Độ khó</label>
                      </div>
                      <select className="custom-select" id="level" name='level' value={level} onChange={this.handleChange} required={true}>
                        <option defaultValue='0'>Rất dễ</option>
                        <option value="1">Dễ</option>
                        <option value="2">Trung bình</option>
                        <option value="3">Khó</option>
                        <option value="4">Rất khó</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <input id='time' placeholder="Thời gian (phút)" className="form-control" type="number" name='time' value={time} onChange={this.handleChange} required={true} />
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
}

const mapStateToProps = state => {
  let { basicInfoRequesting } = state.recipeReducer
  return { basicInfoRequesting }
}

const mapDispatchToProps = (dispathch, props) => {
  return {
    addRecipe: (basicInfo) => {
      dispathch(recipeActions.addRecipeBasicInfo(basicInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBasicInfo)
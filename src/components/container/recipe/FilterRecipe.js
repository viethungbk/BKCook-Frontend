import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recipeActions } from '../../../actions/recipeActions'

const FilterRecipe = ({ filtered }) => {
  const dispatch = useDispatch()

  let [state, setState] = useState({
    tags: '',
    typeRecipe: '',
    level: 1,
    processingMethod: '',
    purpose: '',
    countryCuisine: '',
    typeOfDish: '',
    season: ''
  })
  // let { totalRecords, recipes } = useSelector(state => state.filterReducer)

  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleClick = () => {
    setState({
      tags: '',
      typeRecipe: '',
      level: 1,
      processingMethod: '',
      purpose: '',
      countryCuisine: '',
      typeOfDish: '',
      season: ''
    })
    dispatch(recipeActions.filter(null, null, 1, null, null, null, null, null))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(recipeActions.filter(
      state.tags,
      state.typeRecipe,
      state.level,
      state.processingMethod,
      state.purpose,
      state.countryCuisine,
      state.typeOfDish,
      state.season
    ))
    filtered(true)
  }

  return (
    <div>
      <p>
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Lọc công thức
          </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="tags" name='tags' value={state.tags} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="typeRecipe" name='typeRecipe' value={state.typeRecipe} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="level" name='level' value={state.level} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="processingMethod" name='processingMethod' value={state.processingMethod} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="purpose" name='purpose' value={state.purpose} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="countryCuisine" name='countryCuisine' value={state.countryCuisine} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="typeOfDish" name='typeOfDish' value={state.typeOfDish} onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="season" name='season' value={state.season} onChange={handleChange} />
              </div>
            </div>
            <button type='submit' className='btn btn-primary mt-2 mr-2'>Lọc</button>
            <button className='btn btn-danger mt-2' onClick={handleClick}>Làm trống</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FilterRecipe
// class FilterRecipe extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>
//           <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//             Lọc công thức
//           </button>
//         </p>
//         <div className="collapse" id="collapseExample">
//           <div className="card card-body">
//             List trường để lọc
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default FilterRecipe;
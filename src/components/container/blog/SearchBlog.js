import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { blogActions } from '../../../actions/blogActions'

const SearchBlog = () => {
  const dispatch = useDispatch()
  let [state, setState] = useState({
    search: ''
  })
  const handleChange = (e) => {
    dispatch(blogActions.search(e.target.value))
    setState({ ...state, search: e.target.value })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(blogActions.search(state.search))
  }
  return (
    <div className="input-group mb-3">
      <form onSubmit={handleSubmit} className='form-inline'>
        <input type="text" className="form-control" placeholder="tìm kiếm bài viết" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange} />
        <div className="input-group-append">
          <button type='submit' className="input-group-text">Tìm kiếm</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBlog
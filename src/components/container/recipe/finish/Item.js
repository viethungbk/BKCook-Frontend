import React, { useState } from 'react'

const Item = ({ category, handleChange, item }) => {
  let { _id, label } = item

  const [state, setState] = useState({
    checked: false
  })

  const onChange = (e) => {
    setState({
      checked: e.target.checked
    })
    handleChange(category, label, e.target.checked)
  }

  
  return (
    <div className='col-md-4 col-sm-6'>
      <div className="form-group">
        <span className="switch switch-sm">
          <input type="checkbox" className="switch" id={_id} onChange={onChange} checked={state.checked} />
          <label htmlFor={_id}>{label}</label>
        </span>
      </div>
    </div>
  )
}

export default Item
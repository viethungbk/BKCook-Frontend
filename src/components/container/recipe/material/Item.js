import React from 'react'
import { useDispatch } from 'react-redux'
import { materialActions } from '../../../../actions/materialActions'

const Item = (props) => {
  const dispatch = useDispatch()
  let { _id, name, unit, quantitative } = props.item

  const handleDelete = (_id) => {
    dispatch(materialActions.deleteMaterial(_id))
  }

  return (
    <tr>
      <th scope="row" style={{ display: 'none' }}>{_id}</th>
      <td>{name}</td>
      <td>{unit}</td>
      <td>{quantitative}</td>
      <td>
        <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(_id)}>Xóa nguyên liệu</button>
      </td>
    </tr>
  )
}

export default Item
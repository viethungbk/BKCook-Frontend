import React from 'react'
import { API_URL } from '../../../../constants/Config'

const Item = (props) => {
  const { _id, stepNumber, description, image } = props.item

  return (
    <tr>
      <th scope="row" style={{ display: 'none' }}>{_id}</th>
      <td>{stepNumber}</td>
      <td>{description}</td>
      <td>
        <img src={`${API_URL}/${image}`} className="img-fluid" alt="Responsive" style={{width: '200px'}} />
      </td>
    </tr>
  )
}

export default Item
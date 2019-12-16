import React from 'react'
import Item from './Item'
import { showListItem } from '../../../../actions/function'

class List extends React.Component {
  render() {
    let { steps } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{display: 'none'}}>STT</th>
            <th scope="col">Bước</th>
            <th scope="col">Mô tả</th>
            <th scope='col'>Hình ảnh</th>
          </tr>
        </thead>
        <tbody>
          {showListItem(steps, Item)}
        </tbody>
      </table>
    )
  }
}

export default List
import React from 'react'
import Item from './Item'
import { showListItem } from '../../../../actions/function'

class List extends React.Component {
  render() {
    let { materials } = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{display: 'none'}}></th>
            <th scope="col">Tên nguyên vật liệu</th>
            <th scope="col">Đơn vị đo</th>
            <th scope="col">Định lượng cần thiết</th>
            <th scope='col'>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {showListItem(materials, Item)}
        </tbody>
      </table>
    );
  }
}

export default List
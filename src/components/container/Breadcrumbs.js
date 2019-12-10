import React from 'react';
import { NavLink } from 'react-router-dom';
import { isArray } from 'util';

class Breadcrumbs extends React.Component {
  showLabels(pages) {
    let result = null;

    if (isArray(pages) && pages.length > 0) {
      result = pages.map((page, index) => {
        let { label, to } = page;
        return <li key={index} className="breadcrumb-item"><NavLink to={to}>{label}</NavLink></li>
      })
    }

    return result
  }
  render() {
    let { pages } = this.props;
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {this.showLabels(pages)}
        </ol>
      </nav>

    )
  }
}

export default Breadcrumbs;
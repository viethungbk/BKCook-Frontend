import React from 'react'
import { connect } from 'react-redux'
import Breadcrumbs from '../components/container/Breadcrumbs'

class BreadcrumbsContainer extends React.Component {
  render() {
    let { pages } = this.props
    console.log(pages)
    return (
      <div>
        <Breadcrumbs pages={pages} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pageReducer
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changePage: () => {
      dispatch()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsContainer)
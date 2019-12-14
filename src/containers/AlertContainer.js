import React from 'react'
import { connect } from 'react-redux'

class AlertContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render() {
    let { type, message } = this.props
    console.log(type)
    return (
      <div className='mt-100'>
        {
          message &&
          <div className={`alert ${type} alert-dismissible fade show`} role="alert">
            <strong>{message}</strong>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  let { type, message } = state.alertReducer
  return { type, message }
}

export default connect(mapStateToProps, null)(AlertContainer)
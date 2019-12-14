import { alertConstants } from '../constants/alertConstants'

let initState = {}

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        ...state,
        type: 'alert-success',
        message: action.message
      }
    case alertConstants.ERROR:
      return {
        ...state,
        type: 'alert-danger',
        message: action.message
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}

export default alertReducer
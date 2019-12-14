import { userConstants } from '../constants/userConstants'

let user = JSON.parse(localStorage.getItem('user'))
// let initState = user ? { loggedIn: true, user } : {}
let initState = user ? { loggedIn: true, user } : {}

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: action.user
      }
      return state
    case userConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.user
      }
      return state
    case userConstants.LOGIN_FAILURE:
      state = {
        ...state,
        loggingIn: false,
        loggedIn: false
      }
      return state
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}

export default authenticationReducer
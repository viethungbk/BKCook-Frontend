import { userService } from '../services/userService'
import { userConstants } from '../constants/userConstants'
import Toastr from '../components/Toastr'

export const userActions = {
  login,
  logout,
  register
}

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }))
    userService.login(email, password).then(response => {
      let { success: statusSuccess, data } = response
      if (statusSuccess) {
        let { user } = data
        dispatch(success(user))
        Toastr.success('Đăng nhập thành công')
      } else {
        let { message } = data
        dispatch(failure(message))
        Toastr.error({ errCode: null, message: message })
      }
    })
  }

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  return dispatch => {
    userService.logout()
    dispatch(success())
    Toastr.success('Đăng xuất thành công')
  }

  function success() { return { type: userConstants.LOGOUT } }
}

function register(user) {
  return dispatch => {
    dispatch(request(user))
    userService.register(user).then(response => {
      let { success: statusSuccess, data } = response
      if (statusSuccess) {
        let { user } = data

        dispatch(success(user))
        Toastr.success('Đăng ký thành công')
      } else {
        let { message } = data

        dispatch(failure(message))
        Toastr.error({ errCode: null, message })
      }
    })
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
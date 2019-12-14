import callApi from '../utils/apiCaller'

export const userService = {
  login,
  logout,
  register
}

function login(email, password) {
  let body = {
    email,
    password
  }
  return callApi(
    'api/users/login',
    'POST',
    body
  ).then(res => {
    let { user, token } = res.data.data
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    return res.data
  }).catch(err => {
    return err.response.data
  })
}

function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

function register(user) {
  return callApi(
    'api/users/signup',
    'POST',
    user
  ).then(res => {
    return res.data
  }).catch(err => {
    return err.response.data
  })
}
import { userService } from "../services/userService";
import { userConstants } from "../constants/userConstants";
import { alertActions } from "../actions/alertActions";

export const userActions = {
  login,
  logout,
  register
};

function login(email, password, dispatch) {
  // return dispatch => {
  dispatch(request({ email }));
  userService.login(email, password).then(response => {
    let { success: statusSuccess, data } = response;
    console.log(response);
    if (statusSuccess) {
      let { user } = data;
      console.log(user);
      dispatch(success(user));
      dispatch(alertActions.success("Đăng nhập thành công"));
    } else {
      let { message } = data;
      // console.log(message)
      dispatch(failure(message));
      dispatch(alertActions.error(message));
    }
  });
  // };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return dispatch => {
    console.log("userActions");
    userService.logout();

    dispatch(alertActions.success("Đăng xuất thành công"));
    dispatch(success());
  };

  function success() {
    return { type: userConstants.LOGOUT };
  }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));
    userService.register(user).then(response => {
      let { success: statusSuccess, data } = response;
      console.log(response);
      if (statusSuccess) {
        let { user } = data;
        dispatch(success(user));
        dispatch(alertActions.success("Đăng ký thành công"));
      } else {
        let { message } = data;
        dispatch(failure(message));
        dispatch(alertActions.error(message));
      }
    });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

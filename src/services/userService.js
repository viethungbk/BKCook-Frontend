import callApi from "../utils/apiCaller";
import axios from "axios";

export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  let body = {
    email,
    password
  };
  console.log(body);
  return callApi("users/login", "POST", body)
    .then(res => {
      // console.log(res, "sssdsd");
      let { user, token } = res.data.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return res.data;
    })
    .catch(err => {
      // console.log(err, "ssdsdsd");
      return err;
    });
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

function register(user) {
  return callApi("api/users/signup", "POST", user)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err.response.data;
    });
}

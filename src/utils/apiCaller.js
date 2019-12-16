import axios from "axios";
import * as Config from "./../constants/Config";

const token = localStorage.getItem("token") || "";
export default function callApi(
  endpoint,
  method = "GET",
  body,
  headers = {
    Authorization: `Bearer ${token}`
  }
) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
    headers
  });
}

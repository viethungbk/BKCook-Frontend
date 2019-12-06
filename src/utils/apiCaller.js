import axios from 'axios';
import { API_URL } from '../constants/Config';

const callAPI = (endPoint, method = 'GET', body = null) => {
  return axios({
    method: method,
    url: `${API_URL}/${endPoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  })
}

export default callAPI;
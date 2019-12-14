import axios from 'axios';
import { API_URL } from '../constants/Config';

const callAPI = (endPoint, method = 'GET', body = null, headers = {}) => {
  return axios({
    method: method,
    url: `${API_URL}/${endPoint}`,
    data: body,
    headers
  })
}

export default callAPI;
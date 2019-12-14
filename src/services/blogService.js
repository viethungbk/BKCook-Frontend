import callApi from '../utils/apiCaller'
import { ITEM_PER_PAGE } from '../constants/Config'

export const blogService = {
  fetchBlogs,
  fetchBlog
}

function fetchBlogs(page = 1) {
  return callApi(
    `api/blogs?page=${page}&records=${ITEM_PER_PAGE}`,
    'GET',
    null
  )
}

function fetchBlog(_id) {
  return callApi(
    `api/blogs/id?id=${_id}`,
    'GET',
    null
  )
}
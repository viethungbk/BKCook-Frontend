import { blogConstants } from '../constants/blogConstants'
import { blogService } from '../services/blogService'

export const blogActions = {
  fetchBlogs,
  fetchBlog
}

function fetchBlogs(page = 1) {
  return dispatch => {
    blogService.fetchBlogs(page).then(res => {
      let { totalRecords, blogs } = res.data.data
      dispatch(success(totalRecords, blogs))
    })
  }

  function success(totalRecords, blogs) { return { type: blogConstants.FETCH_BLOGS, totalRecords, blogs } }
}

function fetchBlog(_id) {
  return dispatch => {
    blogService.fetchBlog(_id).then(res => {
      let blog = res.data.data
      dispatch(success(blog))
    })
  }

  function success(blog) { return { type: blogConstants.FETCH_BLOG, blog } }
}
import { blogConstants } from '../constants/blogConstants'
import { blogService } from '../services/blogService'

export const blogActions = {
  fetchBlogs,
  fetchBlog,
  search,
  resetSearch
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

function search(keyword) {
  return dispatch => {
    if (keyword === '') {
      dispatch(resetSearch())
    } else {
      blogService.search(keyword).then(response => {
        let { success, data } = response
        if (success) {
          let { totalRecords, blogs } = data
          dispatch(search(totalRecords, blogs))
        }
      })
    }
  }

  function search(totalRecords, blogs) { return { type: blogConstants.SEARCH_BLOG, totalRecords, blogs } }
}

function resetSearch() { return { type: blogConstants.RESET_SEARCH } }

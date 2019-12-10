import { blogAction } from '../constants/ActionType'
import { ITEM_PER_PAGE } from '../constants/Config'
import callApi from '../utils/apiCaller'
import { convertToUrlKey } from '../actions/function'

export const actFetchPostsRequest = (page = 1) => {
  return (dispatch) => {
    return callApi(`api/blogs?page=${page}&records=${ITEM_PER_PAGE}`, 'GET', null).then(res => {
      let { success, data } = res.data
      if (success) {
        let { blogs, totalRecords } = data
        blogs = blogs.map(blog => {
          return {
            ...blog,
            url_key: convertToUrlKey(blog.title, blog._id)
          }
        })
        dispatch(actFetchPosts(blogs, totalRecords))
      }
    })
  }
}

export const actFetchPosts = (currentBlogs, totalRecords) => {
  return {
    type: blogAction.FETCH_POSTS,
    data: {
      currentBlogs,
      totalRecords
    }
  }
}

export const actFetchPost = (url_key) => {
  return {
    type: blogAction.FETCH_POST,
    url_key
  }
}

// export const actChangePage = ()
import { blogAction } from '../constants/ActionType';
import { ITEM_PER_PAGE } from '../constants/Config';
import callApi from '../utils/apiCaller';

export const actFetchPostsRequest = (page = 1) => {
  return (dispatch) => {
    return callApi(`api/blogs?page=${page}&records=${ITEM_PER_PAGE}`, 'GET', null).then(res => {
      let { success, data } = res.data
      if (success) {
        let { blogs, totalRecords } = data
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

export const actFetchPost = (blogId) => {
  return {
    type: blogAction.FETCH_POST,
    blogId
  }
}
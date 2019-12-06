import { postAction } from '../constants/ActionType';
import { ITEM_PER_PAGE } from '../constants/Config';
import callApi from '../utils/apiCaller';

export const actFetchPostsRequest = (page = 1) => {
  return (dispatch) => {
    return callApi(`/post?page=${page}&records=${ITEM_PER_PAGE}`, 'GET', null).then(res => {
      let indexOfLastItem = page * ITEM_PER_PAGE;
      let indexOfFirstItem = indexOfLastItem - ITEM_PER_PAGE;
      let currentPosts = res.data.slice(indexOfFirstItem, indexOfLastItem);
      let totalPost = res.data.length;
      // console.log(res)

      dispatch(actFetchPosts(currentPosts, totalPost));
    })
  }
}

export const actFetchPosts = (currentPosts, totalPost) => {
  return {
    type: postAction.FETCH_POSTS,
    currentPosts,
    totalPost,
  }
}
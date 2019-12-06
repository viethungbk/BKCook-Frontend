import { postAction } from '../constants/ActionType';

let initState = {
  id: 1,
  name: 'Blog name',
  image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
  description: 'This is description'
}

const currentBlogReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

export default currentBlogReducer
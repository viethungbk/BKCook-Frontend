import { postAction } from '../constants/ActionType';

let initState = {
  totalBlog: 18,
  currentBlog: [
    {
      id: 1,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    },
    {
      id: 2,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    },
    {
      id: 3,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    },
    {
      id: 4,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    },
    {
      id: 5,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    },
    {
      id: 6,
      name: 'Blog name',
      image: 'https://media.cooky.vn/article/s640/cooky-article-cover-b5212.jpg',
      description: 'blog description'
    }
  ]
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default blogReducer;
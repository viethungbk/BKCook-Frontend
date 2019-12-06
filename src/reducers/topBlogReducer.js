import { postAction } from '../constants/ActionType'

// let initState = {
//   id: 1,
//   name: 'Blog name',
//   image: 'https://media.cooky.vn/article/s100x100/cooky-article-cover-b5218.jpg',
//   description: 'This is description'
// }
let initState = [
  {
    id: 1,
    name: 'Blog name',
    image: 'https://media.cooky.vn/article/s100x100/cooky-article-cover-b5218.jpg',
    description: 'this is description'
  },
  {
    id: 2,
    name: 'Blog name',
    image: 'https://media.cooky.vn/article/s100x100/cooky-article-cover-b5218.jpg',
    description: 'this is description'
  },
  {
    id: 3,
    name: 'Blog name',
    image: 'https://media.cooky.vn/article/s100x100/cooky-article-cover-b5218.jpg',
    description: 'this is description'
  },
  {
    id: 4,
    name: 'Blog name',
    image: 'https://media.cooky.vn/article/s100x100/cooky-article-cover-b5218.jpg',
    description: 'this is description'
  }
]

const topBlogReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return [...state]
  }
}

export default topBlogReducer
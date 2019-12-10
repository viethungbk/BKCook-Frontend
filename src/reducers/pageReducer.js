import { blogAction } from '../constants/ActionType';

let initState = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blog' }
];

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default pageReducer;
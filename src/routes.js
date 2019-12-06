import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/list/PostPage';
import ListRecipePage from './pages/list/ListRecipePage';
import ListBlogPage from './pages/list/ListBlogPage';
import BlogDetailPage from './pages/details/BlogDetailPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/post',
    exact: true,
    main: () => <PostPage />
  },
  {
    path: '/blog',
    exact: true,
    main: ({ match }) => <ListBlogPage match={match} />
  },
  {
    path: '/blog/:blogId',
    exact: true,
    main: ({ match }) => <BlogDetailPage match={match} />
  },
  {
    path: '/recipe',
    exact: true,
    main: () => <ListRecipePage />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
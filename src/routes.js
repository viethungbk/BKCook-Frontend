import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/list/PostPage';
import ListRecipePage from './pages/list/ListRecipePage';
import ListBlogPage from './pages/list/ListBlogPage';
import BlogDetailPage from './pages/details/BlogDetailPage';
import AuthorDetailPage from './pages/details/AuthorDetailPage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

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
    path: '/blogs',
    exact: true,
    main: ({ match }) => <ListBlogPage match={match} />
  },
  {
    path: '/blogs/:blogId',
    exact: true,
    main: ({ match }) => <BlogDetailPage match={match} />
  },
  {
    path: '/recipe',
    exact: true,
    main: () => <ListRecipePage />
  },
  {
    path: '/author/:authorId',
    exact: true,
    main: () => <AuthorDetailPage />
  },
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage />
  },
  {
    path: '/register',
    exact: true,
    main: () => <RegisterPage />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
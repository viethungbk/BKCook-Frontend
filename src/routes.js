import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import RecipeListPage from "./views/Recipe/RecipeListPage";
import CategoryPage from "./views/Recipe/CategoryPage";
import RecipeDetail from "./views/Recipe/RecipeDetail";
import RecipeAdd from "./views/Recipe/RecipeAdd";
import ListUsers from "./views/user/ListUsers";
import DetailUser from "./views/user/DetailUser";
import EditUser from "./views/user/EditUser";
import AddUser from "./views/user/AddUser";
import ListClassPage from "./views/class/ListClassPage";
import DetailClass from "./views/class/DetailClass";
import AddClassPage from "./views/class/AddClassPage";
import ListRestaurant from "./views/restaurant/ListRestaurant";
import ListBlog from "./views/blog/ListBlog";
import Demo from "./views/Demo";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/recipe",
    layout: DefaultLayout,
    component: CategoryPage
  },
  {
    path: "/recipeList/1",
    layout: DefaultLayout,
    component: RecipeListPage
  },
  {
    path: "/recipeDetail",
    layout: DefaultLayout,
    component: RecipeDetail
  },
  {
    path: "/recipeAdd",
    layout: DefaultLayout,
    component: RecipeAdd
  },
  {
    path: "/listUsers",
    layout: DefaultLayout,
    component: ListUsers
  },
  {
    path: "/detailUser",
    layout: DefaultLayout,
    component: DetailUser
  },
  {
    path: "/editUser",
    layout: DefaultLayout,
    component: EditUser
  },
  {
    path: "/addUser",
    layout: DefaultLayout,
    component: AddUser
  },
  {
    path: "/listClasses",
    layout: DefaultLayout,
    component: ListClassPage
  },
  {
    path: "/detailClasses",
    layout: DefaultLayout,
    component: DetailClass
  },
  {
    path: "/addClasses",
    layout: DefaultLayout,
    component: AddClassPage
  },
  {
    path: "/restaurant",
    layout: DefaultLayout,
    component: ListRestaurant
  },
  {
    path: "/listBlog",
    layout: DefaultLayout,
    component: ListBlog
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/demo",
    layout: DefaultLayout,
    component: Demo
  },
  {
    path: "/error",
    layout: DefaultLayout,
    component: Errors
  }
];

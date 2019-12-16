import React from "react";
import { Redirect, Route } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import Errors from "./views/Errors";
import RecipeListPage from "./views/Recipe/RecipeListPage";
import ApproveRecipePage from "./views/Recipe/ApproveRecipePage";
import CategoryPage from "./views/Recipe/CategoryPage";
import RecipeDetail from "./views/Recipe/RecipeDetail";
import RecipeAdd from "./views/Recipe/RecipeAdd";
import ListUsers from "./views/user/ListUserPage";
import DetailUser from "./views/user/DetailUser";
import EditUser from "./views/user/EditUser";
import AddUser from "./views/user/AddUser";
import ListClassPage from "./views/class/ListClassPage";
import DetailClass from "./views/class/DetailClass";
import AddClassPage from "./views/class/AddClassPage";
import ListBlog from "./views/blog/ListBlog";
import AddCategoryPage from "./views/Recipe/AddCategoryPage";
import withTracker from "./withTracker";
import LoginPage from "./views/loginPage";
import DetailBlog from "./views/blog/DetailBlog";
import AddBlogPage from "./views/blog/AddBlogPage";
import ListRestaurant from "./views/restaurant/ListRestaurant";
import EditBlogPage from "./views/blog/EditBlogPage";
const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/login",
    exact: true,
    component: LoginPage
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
    path: "/categoryAdd",
    layout: DefaultLayout,
    component: ({ history }) => <AddCategoryPage history={history} />
  },
  {
    path: "/recipeList",
    layout: DefaultLayout,
    // component: RecipeListPage
    component: ({ location }) => <RecipeListPage location={location} />
  },
  {
    path: "/recipeApprove",
    layout: DefaultLayout,
    // component: RecipeListPage
    component: ({ location, history }) => (
      <ApproveRecipePage location={location} history={history} />
    )
  },
  {
    path: "/recipeDetail",
    layout: DefaultLayout,
    component: ({ location, history }) => (
      <RecipeDetail location={location} history={history} />
    )
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
    component: ({ history }) => <DetailClass history={history} />
  },
  {
    path: "/addClasses",
    layout: DefaultLayout,
    component: AddClassPage
  },
  {
    path: "/listBlog",
    layout: DefaultLayout,
    component: ListBlog
  },
  {
    path: "/detailBlog",
    layout: DefaultLayout,
    component: ({ location, history }) => (
      <DetailBlog history={history} location={location} />
    )
  },
  {
    path: "/addBlog",
    layout: DefaultLayout,
    component: ({ history }) => <AddBlogPage history={history} />
  },
  {
    path: "/editBlog",
    layout: DefaultLayout,
    component: ({ location }) => <EditBlogPage location={location} />
  },
  {
    path: "/restaurant",
    layout: DefaultLayout,
    component: ListRestaurant
  },
  {
    path: "/error",
    layout: DefaultLayout,
    component: Errors
  }
];

const route = () =>
  routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={withTracker(props => {
          if (localStorage.getItem("token")) {
            return (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            );
          } else {
            return <LoginPage />;
          }
        })}
      />
    );
  });

export default route;

import React from "react";
import Sidebar from "./Sidebar";

class MainSidebar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Trang chủ", label: "Trang chủ", to: "/dashboard" },
        {
          name: "Quản lý công thức",
          label: "Quản lý công thức",
          to: "/recipe",
          subItems: [
            {
              name: "Danh sách loại công thức",
              label: "Danh sách loại công thức",
              to: "/recipe"
            },
            {
              name: "Duyệt công thức",
              label: "Duyệt công thức",
              to: "/recipeApprove"
            },
            {
              name: "Thêm loại công thức",
              label: "Thêm loại công thức",
              to: "/categoryAdd"
            }
          ]
        },
        {
          name: "Quản lý bài viết",
          label: "Quản lý bài viết",
          to: "/ListBlog",
          subItems: [
            {
              name: "Xem danh sách bài viết",
              label: "Xem danh sách bài viết",
              to: "/ListBlog"
            },
            { name: "Thêm bài viết", label: "Thêm bài viết", to: "/addBlog" }
          ]
        },
        {
          name: "Quản lý lớp học",
          label: "Quản lý lớp học",
          to: "/ListClassPage",
          subItems: [
            {
              name: "Xem danh sách lớp học",
              label: "Xem danh sách lớp học",
              to: "/listClasses"
            }
          ]
        },
        {
          name: "Quản lý người dùng",
          label: "Quản lý người dùng",
          to: "/listUsers",
          subItems: [
            {
              name: "Xem danh sách người dùng",
              label: "Xem danh sách người dùng",
              to: "/ListUsers"
            }
          ]
        },
        {
          name: "Quản lý nhà hàng",
          label: "Quản lý nhà hàng",
          to: "/restaurant",
          subItems: [
            {
              name: "Xem danh sách nhà hàng",
              label: "Xem danh sách nhà hàng",
              to: "/restaurant"
            }
          ]
        }
      ]
    };
  }

  render() {
    var { items } = this.state;
    return <Sidebar items={items} location={this.props.location} />;
  }
}

export default MainSidebar1;

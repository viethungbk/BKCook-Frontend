export default function () {
  return [
    {
      title: "Trang chủ",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Quản lý công thức",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/recipe",
    },
    {
      title: "Quản lý bài viết",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listBlog",
    },

    {
      title: "Quản lý lớp học",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listClasses",
    },
    {
      title: "Quản lý người dùng",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listUsers",
    },
    {
      title: "Quản lý nhà hàng",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/restaurant",
    },
  ];
}

export default function () {
  return [
    {
      title: "Trang chủ",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Công thức",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/recipe",
    },
    {
      title: "Bài viết",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listBlog",
    },

    {
      title: "Lớp học",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listClasses",
    },
    {
      title: "Người dùng",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/listUsers",
    },
    {
      title: "Nhà hàng",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/restaurant",
    },
  ];
}

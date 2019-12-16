import React from 'react'
import { useSelector } from 'react-redux'
import ListTopBlog from '../../components/container/blog/ListTopBlog'

const TopBlogContainer = () => {
  let { blogs } = useSelector(state => state.blogReducer)
  
  blogs = blogs.slice(0, 5)

  console.log(blogs)
  return (

    <ListTopBlog topBlog={blogs}></ListTopBlog>
  )
}

export default TopBlogContainer
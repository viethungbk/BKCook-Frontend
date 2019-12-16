import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import ListBlog from '../../components/container/blog/ListBlog'
import SearchBlog from '../../components/container/blog/SearchBlog'
import TopBlogContainer from './TopBlogContainer'
import Breadcrumbs from '../../components/container/Breadcrumbs'
import { blogActions } from '../../actions/blogActions'

const pages = [
  { label: 'Home', to: '/' },
  { label: 'Blog', to: '/blogs' }
]

const BlogContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(blogActions.fetchBlogs())
  }, [])
  let { totalRecords, blogs } = useSelector(state => state.blogReducer)
  console.log(totalRecords, blogs)
  let { totalRecords: searchBlogRecords, blogs: searchBlogs } = useSelector(state => state.searchBlogReducer)

  
  const handlePaginate = (page) => {
    dispatch(blogActions.fetchBlogs(page))
  }
  return (
    <div>
      <div className='row'>
        <Breadcrumbs pages={pages} />
      </div>
      <br />
      <div className='row'>
        <div className='col-md-8'>
          <h4>Blog</h4>
          <hr />
          {
            searchBlogRecords && searchBlogRecords > 0
              ? <ListBlog blogs={searchBlogs} totalBlog={searchBlogRecords} handlePaginate={handlePaginate} />
              : <ListBlog blogs={blogs} totalBlog={totalRecords} handlePaginate={handlePaginate} />
          }

        </div>
        <div className='col-md-4'>
          <h4>Bài viết nổi bật</h4>
          <hr />
          <SearchBlog />
          <TopBlogContainer />
        </div>
      </div>
    </div>
  )
}

export default BlogContainer
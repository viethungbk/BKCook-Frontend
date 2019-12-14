import React from 'react'
//component
import Banner from '../components/container/Banner'
import ListClass from '../components/container/class/ListClass'
import ListRecipeContainer from '../containers/recipe/ListRecipeContainer'
import TopBlogContainer from '../containers/blog/TopBlogContainer'
import Layout from '../components/Layout'

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container mt-100">
          <div className="row">
            <Banner />
          </div>
          <hr />
          <div className="row">
            <ListClass title='LỚP HỌC NẤU ĂN ĐANG DIỄN RA' description='Hãy cùng tham gia và trải nghiệm các lớp học nấu ăn' />
          </div>
          <br />
          <div className="row">
            <div className="col-md-8">
              <ListRecipeContainer title='CÔNG THỨC TỪ CỘNG ĐỒNG' isShowFull={false} />
            </div>
            <div className="col-md-4">
              <h5 className='card-title'>BÀI VIẾT NỔI BẬT</h5>
              <hr />
              <TopBlogContainer />
            </div>
          </div>
          <br />
          <div className="row">
            <ListRecipeContainer title='CÔNG THỨC BỞI COOKY' isShowFull={true} />
          </div>
          <br />
        </div>
      </Layout>
    )
  }
}

export default HomePage
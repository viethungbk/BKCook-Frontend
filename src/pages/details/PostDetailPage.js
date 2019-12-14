import React from 'react';
import Breadcrumbs from '../../components/container/Breadcrumbs'
import Layout from '../../components/Layout';

class PostDetailPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">

          <div className="row">
            <Breadcrumbs />
          </div>

          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                  <div className='caption'>
                    <h3>Title</h3>
                  </div>
                  <img data-src="#" alt="" />
                  <div className="caption">
                    <p>
                      description
          </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                  <img data-src="#" alt="" className="img-responsive img-circle" />
                  <div className="caption">
                    <h3>About the author</h3>
                    <p>
                      description
          </p>
                    <p>
                      <a href="#" className="btn btn-primary">ReadMore</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            bs3for
</div>

        </div>
      </Layout>



    )
  }
}

export default PostDetailPage;
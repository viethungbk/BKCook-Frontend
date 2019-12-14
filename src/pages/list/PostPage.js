import React from 'react';
import Breadcrumbs from '../../components/container/Breadcrumbs';
import Layout from '../../components/Layout';

class PostPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wide-box wide-box-white ">
          <div className="container">
            <div className="row">
              <Breadcrumbs />
            </div>
            <div className="row">
              {/* <ListPost /> */}
              {/* <ListPostContainer />
            <ListTopPostContainer /> */}

            </div>
          </div>
        </div>
      </Layout>

    )
  }
}

export default PostPage;
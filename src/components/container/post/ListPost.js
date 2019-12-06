import React from 'react';
import ItemPost from './ItemPost';
import List from '../../List';

class ListPost extends React.Component {
  render() {
    let { posts } = this.props;
    return (
      <div>
        <div className='headline'>
          <h2>Blog</h2>
        </div>
        <br />
        <div className="row">
          <List data={posts} render={(post, index) => <ItemPost key={index} post={post} />} />
          {/* {this.renderListPost()} */}
        </div>
      </div>
    )
  }
}

export default ListPost;
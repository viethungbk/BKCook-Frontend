import React from 'react';

class SearchBlog extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="tìm kiếm bài viết" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">Tìm kiếm</span>
        </div>
      </div>
    )
  }
}

export default SearchBlog;
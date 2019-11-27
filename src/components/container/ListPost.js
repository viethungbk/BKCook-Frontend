import React from 'react';
import ItemPost from './ItemPost';

const listPost = [
  {
    name: 'Vì sao bánh xèo không giòn - cách khắc phục những lỗi khi làm bánh xèo mà chị em nên biết',
    link: '/blog/vi-sao-banh-xeo-khong-gion-cach-khac-phuc-nhung-loi-khi-lam-banh-xeo-ma-chi-em-nen-biet-5219',
    imageLink: 'https://www.cooky.vn/imgs/blank-img/300x300.jpg',
    category: {
      categoryName: 'Kiến thức & Kinh nghiệm',
      categoryLink: '/blog/kien-thuc-kinh-nghiem'
    },
    view: '49K'
  },
  {
    name: 'Vì sao bánh xèo không giòn - cách khắc phục những lỗi khi làm bánh xèo mà chị em nên biết',
    link: '/blog/vi-sao-banh-xeo-khong-gion-cach-khac-phuc-nhung-loi-khi-lam-banh-xeo-ma-chi-em-nen-biet-5219',
    imageLink: 'https://www.cooky.vn/imgs/blank-img/300x300.jpg',
    category: {
      categoryName: 'Kiến thức & Kinh nghiệm',
      categoryLink: '/blog/kien-thuc-kinh-nghiem'
    },
    view: '49K'
  },
  {
    name: 'Vì sao bánh xèo không giòn - cách khắc phục những lỗi khi làm bánh xèo mà chị em nên biết',
    link: '/blog/vi-sao-banh-xeo-khong-gion-cach-khac-phuc-nhung-loi-khi-lam-banh-xeo-ma-chi-em-nen-biet-5219',
    imageLink: 'https://www.cooky.vn/imgs/blank-img/300x300.jpg',
    category: {
      categoryName: 'Kiến thức & Kinh nghiệm',
      categoryLink: '/blog/kien-thuc-kinh-nghiem'
    },
    view: '49K'
  },
  {
    name: 'Vì sao bánh xèo không giòn - cách khắc phục những lỗi khi làm bánh xèo mà chị em nên biết',
    link: '/blog/vi-sao-banh-xeo-khong-gion-cach-khac-phuc-nhung-loi-khi-lam-banh-xeo-ma-chi-em-nen-biet-5219',
    imageLink: 'https://www.cooky.vn/imgs/blank-img/300x300.jpg',
    category: {
      categoryName: 'Kiến thức & Kinh nghiệm',
      categoryLink: '/blog/kien-thuc-kinh-nghiem'
    },
    view: '49K'
  },
  {
    name: 'Vì sao bánh xèo không giòn - cách khắc phục những lỗi khi làm bánh xèo mà chị em nên biết',
    link: '/blog/vi-sao-banh-xeo-khong-gion-cach-khac-phuc-nhung-loi-khi-lam-banh-xeo-ma-chi-em-nen-biet-5219',
    imageLink: 'https://www.cooky.vn/imgs/blank-img/300x300.jpg',
    category: {
      categoryName: 'Kiến thức & Kinh nghiệm',
      categoryLink: '/blog/kien-thuc-kinh-nghiem'
    },
    view: '49K'
  }
]

class ListPost extends React.Component {
  renderListPost() {
    return listPost.map((post, key) => {
      let { name, link, imageLink, category, view } = post;
      return (
          <ItemPost 
            key={key}
            name={name} 
            link={link} 
            imageLink={imageLink} 
            category={category} 
            view={view} 
          />
        );
    });
  }
  render() {
    return (
      <div className="wide-box wide-box-white home-top-box">
          <div className="container">
            <div className="headline">
              <h2>Bài viết nổi bật</h2>
            </div>
            <div className="blog-home row">
              {this.renderListPost()}
            </div>
            <a href="/blog" className="view-more-btn">
              <span className="fa fa-hand-o-right text-highlight" /> Xem thêm
            </a>
          </div>
        </div>
    );
  }
}

export default ListPost
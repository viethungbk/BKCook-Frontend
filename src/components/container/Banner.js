import React from 'react';

const listImg = [
  'https://media.cooky.vn/ads/s/cooky-ads-637081439306707609.jpg',
  'https://media.cooky.vn/ads/s/cooky-ads-637081434479165522.jpg',
  'https://media.cooky.vn/ads/s/cooky-ads-637057947023515232.jpg'
];

class Banner extends React.Component {
  renderSlideItem() {
    return listImg.map((img, index) => {
      let className = 'carousel-item' + (index === 0 ? ' active' : '');
      return (
        <div className={className} key={index}>
          <img className="d-block w-100 rounded" src={img} alt={`img ${index}`} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid position-relative">
        <div id="carouselExampleIndicators" className="carousel slide mt-10" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            {this.renderSlideItem()}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className='position-absolute form-banner'>
          <form>
            <div className="form-group">
              <h1>Ăn gì hôm nay? Nấu ngay món ngon</h1>
              <input type="text" className="form-control form-control-lg" id="formGroupExampleInput" placeholder="tìm kiếm công thức" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Banner;
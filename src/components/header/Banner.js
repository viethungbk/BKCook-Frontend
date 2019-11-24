import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <div className="cooky-featured-search">
        <div className="container">
          <div id="lazy-top-home-banners" style={{ opacity: 1 }}>
            <div className="top-today-recipes slick-initialized slick-slider">
              <div className="slick-list draggable" tabIndex={0} style={{ height: '380px' }}>
                <div className="slick-track" style={{ opacity: 1, width: '7980px', transform: 'translate3d(-1140px, 0px, 0px)' }}>
                  <div className="today-recipe slick-slide slick-cloned" index={-1} style={{ width: '1140px' }}>
                    <img src="https://media.cooky.vn/ads/s/cooky-ads-637081439306707609.jpg" alt="BÁNH TAI YẾN" />
                  </div>
                  <div className="today-recipe slick-slide slick-active" index={0} style={{ width: '1140px' }}>
                    <img src="https://media.cooky.vn/ads/s/cooky-ads-637081434479165522.jpg" alt="RAU CÂU SƠN THỦY" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', position: 'absolute', top: '50px' }}>
            <div style={{ maxWidth: '800px', margin: '0 15%' }}>
              <div className="title">
                <h1 className="mt2 mb1 center">Ăn gì hôm nay? Nấu ngay món ngon</h1>
              </div>
              <div className="search-container">
                <span className="glyphicon glyphicon-search" />
                <input id="home-search-input" name="url" data-behavior="search_field" type="text" className="form-control" placeholder="ví dụ: Kimchi bibigo, cupcake, soup, mojito, sinh tố..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
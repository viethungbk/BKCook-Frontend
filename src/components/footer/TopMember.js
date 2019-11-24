import React from 'react';

function TopMember(props) {
  let { name, link, imageLink, recipe } = props;
  return (
    <div className="top-member">
      <div className="avt z-effect">
        <a target="_blank" href={link}>
          <img alt={name} className="img-responsive" src={imageLink} />
        </a>
      </div>
      <div className="profile">
        <a target="_blank" href={link} className="name cooky-user-link">
          {name}
                      </a>
        <div className="stats">
          <span className="stats-item">
            <span className="stats-count">{recipe}</span>
            <span className="stats-text">Công thức</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopMember;
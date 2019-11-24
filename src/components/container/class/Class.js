import React from 'react';
import RegisterButton from './RegisterButton';

class Class extends React.Component {
  render() {
    let { name, type, link, imageLink, location, dateTime } = this.props;
    return (
      <div className="item">
        <div className="item-inner">
          <div className="item-photo">
            <a href={link} target="_self">
              <img 
                className="lazy img-responsive" 
                alt={name}
                src={imageLink}
                style={{ display: 'block' }} 
              />
            </a>
          </div>
          <div className="item-info">
            <div className="item-header">
              <div className="type">{type}</div>
              <div className="title">
                <a href={link} target="_self">
                  <h3>{name}</h3>
                </a>
              </div>
            </div>
            <div className="event-calendar">
              <div className="location">{location}</div>
              <div className="date">{dateTime.date} <span className="time">{dateTime.time}</span></div>
            </div>
          </div>
          <RegisterButton />
        </div>
      </div>
    );
  }
}

export default Class;
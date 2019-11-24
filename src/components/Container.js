import React from 'react';
import ListClass from './container/class/ListClass';
import MainContent from './container/MainContent';

class Container extends React.Component {
  render() {
    return (
      <div className="home-body-container ng-scope">
        <ListClass />
        <MainContent />
      </div>
    );
  }
}

export default Container;
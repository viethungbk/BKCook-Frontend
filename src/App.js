import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// routes
import routes from './routes';

// css
import './App.css';

class App extends React.Component {
  showContentMenus(routes) {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        let { path, exact, main } = route;
        return (
          <Route
            key={index}
            path={path} exact={exact} component={main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* start header */}
          <Header />
          {/* end header */}

          {/* start content */}
          {/* <Container /> */}
          {/* end content */}
          {this.showContentMenus(routes)}
          {/* <Route path='/' component={HomePage} exact={true} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/recipe' component={RecipePage} /> */}


          {/* start footer */}
          <Footer />
          {/* end footer */}
        </div>

      </BrowserRouter>
    );
  }
}

export default App;

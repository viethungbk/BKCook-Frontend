import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// routes
import routes from './routes'

// css
import './App.css'

class App extends React.Component {
  showContentMenus(routes) {
    let result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        let { path, exact, main } = route
        return (
          <Route
            key={index}
            path={path} exact={exact} component={main}
          />
        )
      })
    }

    return <Switch>{result}</Switch>
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.showContentMenus(routes)}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

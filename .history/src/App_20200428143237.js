import React from "react";

import Menu from "./components/menu/Menu";
import ProductList from "./components/productsList/ProductList";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>

          <Menu />
          <div className="container">
            <div className="row">
             
              {this.showContentsMenus(routes)}
            </div>
          </div>

      </Router>
    );
  }
  showContentsMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;

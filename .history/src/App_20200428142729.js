import React from "react";

import Menu from './components/menu/Menu';
import ProductList from './components/productsList/ProductList';
import routes from './routes';
import { Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info">
              Add product
            </button>
          <ProductList /> */}
          
         {/* </div>   */}
         { this.showContentsMenus(routes) }
        </div>
      
        </div>
     </div>
    );
  }
  showContentsMenus = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route 
          key= {index}
          path={route.path}
          exact={route.exact}
          component={route.main} />
      })
    }
    return <Switch>
      {result}
    </Switch>
  }
}

export default App;

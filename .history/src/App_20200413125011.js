import React from "react";

import Menu from './components/menu/Menu';
import ProductList from './components/productsList/ProductList';
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />


        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info">
              Add product
            </button>
          <ProductList />
         </div>  
        </div>
      </div>
    );
  }
}

export default App;

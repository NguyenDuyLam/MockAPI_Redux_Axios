import React from 'react';
import ProductList from './../../components/productsList/ProductList'
class ProductListPage extends React.Component {
    render() {
        return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info">
              Add product
            </button>
          <ProductList /> 

              </div>   
        )
    }
}

export default ProductListPage;
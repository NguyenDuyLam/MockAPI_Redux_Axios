import React from "react";
import ProductList from "./../../components/productsList/ProductList";
import ProductItem from "./../../components/productsItem/ProductItem";
import {connect} from 'react-redux';
class ProductListPage extends React.Component {
  
  render() {
    let {products} = this.props;
    console.log(products)
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info">
          Add product
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.lenght > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
  };
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);

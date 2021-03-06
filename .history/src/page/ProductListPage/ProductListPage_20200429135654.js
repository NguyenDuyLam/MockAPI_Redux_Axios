import React from "react";
import ProductList from "./../../components/productsList/ProductList";
import ProductItem from "./../../components/productsItem/ProductItem";
import {connect} from 'react-redux';
import axios from 'axios';
class ProductListPage extends React.Component {
  
  render() {
   axios({
     method: "GET",
     url:"https://5e8d8d5222d8cd0016a79676.mockapi.io/api/ListProducts",
     data: null
   }).then(res => {
    console.log(res)
   }).catch(err => {
     console.log(err)
   })
    var products = []
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
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
  
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);

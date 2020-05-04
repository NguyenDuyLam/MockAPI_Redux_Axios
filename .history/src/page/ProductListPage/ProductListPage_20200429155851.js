import React from "react";
import ProductList from "./../../components/productsList/ProductList";
import ProductItem from "./../../components/productsItem/ProductItem";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import CallApi  from './../../utils/api';
class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
 
  componentDidMount() {
      CallApi('ListProducts', 'GET', null).then(res => {
        this.setState({
          products: res.data
        })
      })
  }
  onDelete = (id) => {
    CallApi(`ListProducts/:${id}`, 'DELETE', null).then(res => {
      console.log(res)
    })
  }
  render() {
    var {products} = this.state ;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info">
          Add product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}  />;
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductListPage);

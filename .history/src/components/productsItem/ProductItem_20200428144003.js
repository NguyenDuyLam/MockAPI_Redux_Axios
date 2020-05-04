import React from "react";

class ProductItem extends React.Component {
  render() {
    let { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className="label label-warning">Active</span>
        </td>
        <td>
          <button type="button" className="btn btn-success">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

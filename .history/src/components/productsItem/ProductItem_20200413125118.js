import React from "react";

class ProductItem extends React.Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>Iphone Pro Max</td>
        <td>500</td>
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

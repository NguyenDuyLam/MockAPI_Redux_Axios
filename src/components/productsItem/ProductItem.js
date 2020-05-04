import React from "react";
import {Link} from 'react-router-dom'

class ProductItem extends React.Component {
  onDelete = (id) => {
    if(confirm('Do you want delete') ) { //eslint-disable-line
      this.props.onDelete(id);
    }
  };

  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "Active" : "No";
    let statusClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`product/${product.id}/edit`} className="btn btn-success" >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

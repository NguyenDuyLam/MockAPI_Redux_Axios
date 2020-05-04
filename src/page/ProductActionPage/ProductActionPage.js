import React from "react";
import CallApi from './../../utils/api';
import {Link} from 'react-router-dom';
import {actAddProductsReauest, actGetProductRequest,actUpdateProductsRequest} from './../../action/index';
import {connect} from 'react-redux'
class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkStatus: "",
    };
  }

  componentDidMount() {
      var {match} = this.props;
      if(match) {
          var id = match.params.id;
          this.props.onEditProducts(id);
      }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
        var {itemEditing} = nextProps;
        this.setState({
            id : itemEditing.id,
            txtName : itemEditing.name,
            txtPrice : itemEditing.price,
            chkStatus : itemEditing.status
        });
    }
}
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  OnSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkStatus} = this.state;
    var {history} = this.props;
    var product = {
      id : id,
      name : txtName,
      price : txtPrice,
      status : chkStatus
  };
    if(id) {
      this.props.onUpdateProducts(product)
    } else {
       this.props.onAddProducts(product);
      
    }
    history.goBack();
    
  };

  render() {
    var { txtName, txtPrice, chkStatus } = this.state;

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.OnSave}>
          <div className="form-group">
            <label>Name: </label>

            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status: </label>

            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="chkStatus"
                  value={chkStatus}
                  onChange={this.onChange}
                  checked={chkStatus}
                />
                Active
              </label>
            </div>
          </div>
          <Link to="/product-list" className="btn btn-danger">Back</Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      itemEditing : state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      onAddProducts: (product) => {
        dispatch(actAddProductsReauest(product))
      },
      onEditProducts: (id) => {
        dispatch(actGetProductRequest(id));
      },
      onUpdateProducts: (product) => {
        dispatch(actUpdateProductsRequest(product))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

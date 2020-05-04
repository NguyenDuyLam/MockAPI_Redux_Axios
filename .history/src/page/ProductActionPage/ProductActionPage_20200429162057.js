import React from "react";
import CallApi from './../../utils/api';
import {Link} from 'react-router-dom'
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
          CallApi(`ListProducts/${id}`, "GET", null).then(res => {
              var data = res.data;
              this.setState({
                  id: data.id,
                  txtName: data.name,
                  txtPrice: data.price,
                  chkStatus: data.chkStatus
              })
          })
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
    var {txtName, txtPrice, chkStatus} = this.state;
    var {history} = this.props;
    CallApi('ListProducts',"POST", {
        name: txtName,
        price: txtPrice,
        status: chkStatus
    }).then(res => {
        history.goBack();
    })
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

export default ProductActionPage;

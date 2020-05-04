import React from "react";
import CallApi from './../../utils/api';
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
        history.push("/");
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
                />
                Active
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;

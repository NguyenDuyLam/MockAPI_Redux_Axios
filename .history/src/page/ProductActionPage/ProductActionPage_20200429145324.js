import React from "react";

class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkStatus: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    OnSave = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

  render() {
      var {txtName, txtPrice, chkStatus} = this.state;
      
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <form onSubmit={this.OnSave} >
            
                <div className="form-group">
                    <label>Name: </label>
                    <input 
                    type="text" className="form-control" name="txtName" 
                    value={txtName} 
                    
                     />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input 
                    type="number" className="form-control" name="txtPrice"
                    value={txtPrice} onChange={this.Onchange}  />
                </div>
                <div className="form-group">
                    <label>Status: </label>
                   
                   <div className="checkbox">
                       <label>
                           <input type="checkbox"  name="chkStatus" value={chkStatus} onChange={this.OnChange} />
                           Active
                       </label>
                   </div>
                   
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    ) ;
  }
}

export default ProductActionPage;

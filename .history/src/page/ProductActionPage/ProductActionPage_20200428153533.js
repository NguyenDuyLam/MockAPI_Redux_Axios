import React from "react";

class ProductActionPage extends React.Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <form  >
            
                <div className="form-group">
                    <label for="">Name: </label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="form-group">
                    <label for="">Price: </label>
                    <input type="number" className="form-control"  />
                </div>
                <div className="form-group">
                    <label for="">Status: </label>
                   
                   <div className="checkbox">
                       <label>
                           <input type="checkbox" value="" />
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

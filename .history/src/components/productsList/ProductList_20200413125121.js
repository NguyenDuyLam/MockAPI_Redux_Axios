import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">List products</h3>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover ">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actor</th>
              </tr>
            </thead>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Menu;

import React from "react";
import {Link, Route} from 'react-router-dom';

const menus = [
  {
    name:"HomePage",
    to:'/',
    exact: true
  },
  {
    name: 'ManageProduct',
    to: '/product-list',
    exact: false
  }
]
const menuLinks = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
          let active = match ? 'active' : '';
          return (
            <li class={active}>
              <Link to={to} >
                {label}
              </Link>
            </li>
          )
      }}
    />
  )
}


class Menu extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Title</a>
        <ul className="nav navbar-nav">
          <li>
            <a>HomePage</a>
          </li>
          <li>
            <a>Manage Product</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;

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
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
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
         {this.showMenus(menus)}
        </ul>
      </div>
    );
  }
  showMenus = (menus) => {
    let result = null;
    if(menus.lenght > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink 
            key = {index}
            label = {menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    } 
    return result;
  }
  
}

export default Menu;

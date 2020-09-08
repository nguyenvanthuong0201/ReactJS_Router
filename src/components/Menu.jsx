import React, { Component } from "react";
import { BrowserRouter as  Switch, Route, Link } from "react-router-dom";    
import dataMenu from '../router/menu.json'

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {   //lable là content ; to là path(tới url);activeOnlyWhenExact khi mình click vào nó
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}                   /// Active class khi click vào
        children={({match}) => {
          let active = match ? "nav-item active" : "nav-item";
          return (
            <li className={active} >
              <Link to = {to} className="nav-link">
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

class Menu extends Component {
  showMenu = () =>{
    let menus=dataMenu
    let result=null;
    if(menus.length > 0)
    {
      result = menus.map((menu,index)=>{
        return (
        <MenuLink key={index } label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
        )
      });
    }
    return result;
  }
  render() {  
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {this.showMenu()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;

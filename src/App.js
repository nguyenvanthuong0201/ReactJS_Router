import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./router/content"

export default class App extends Component {
  showContent=(routes)=>{
    let result= null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
          return(
          <Route key={index} exact={route.exact} path={route.path}>{route.main}</Route>
          )
      })
    }
    return result;
  }
  render() {
    return (
      <Router>
        <div>
          {/* Start MENU */}
          <Menu/>
          {/* End MENU */}
          {/* Start Content */}
          <Switch>
          {this.showContent(routes)}
          </Switch>
          {/* End Content */}
        </div>
      </Router>
    );
  }
}

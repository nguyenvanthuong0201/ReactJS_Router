import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtUserName:"",
            txtPassword:"",
        }
    }
    onChange=(e)=>{
    let target= e.target;
    let name= target.name;
    let value = target.value;
    this.setState({
        [name] : value,
    })
    }
    onLogin = (e) =>{
        e.preventDefault();
        let{txtPassword,txtUserName}=this.state
        if(txtPassword==="admin" && txtUserName==="admin"){
            localStorage.setItem("login",JSON.stringify({
                username:txtUserName,
                password:txtPassword
            }));
        }
    }
    
  render() {
      let{txtPassword,txtUserName}=this.state
      let loggerInUser= localStorage.getItem('login');
      if(loggerInUser){
          return <Redirect to="/sanPham"/>
      }
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <form onSubmit={this.onLogin}>
                  <h1 className="text-center">Đăng nhập</h1>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="txtUserName"
                    value={txtUserName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="txtPassword"
                    value={txtPassword}
                    onChange={this.onChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

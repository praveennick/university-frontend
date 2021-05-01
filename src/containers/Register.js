import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {registerNewUser} from '../actions/userAction'
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

class Register extends React.Component{
  constructor(){
    super();
    this.state={
      role:"ROLE_ADMIN"
    }
    this.inputChanged=this.inputChanged.bind(this);
    this.registerUser=this.registerUser.bind(this);
  }
  inputChanged(event){
    var name=event.target.name;
    var value = event.target.value;
    this.setState(
      {
        [name]:value
      }
    )
  }
//   login(event){
//     event.preventDefault();
//     console.log("state",this.state);
//     this.props.loginUser(this.state);
//     sessionStorage.setItem("id",this.state.s_name)
//     // alert("Login success");
//     // this.props.history.push('/');
//   }
  registerUser(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.registerNewUser(this.state);
    console.log("props", this.props.registerNewUser);
    console.log("register props", this.props);
    
    this.props.history.push('/login');
}
    render() {
      console.log("In login","userLogged:"+this.props.isUserLoggedIn);
      if(this.props.isUserLoggedIn){
        this.props.history.push('/');
      }
        return (
            <div>
               <section className="sub-header">
    <nav>
        <NavLink to="/"><img src="images/logo.png" alt="" /></NavLink>
      <div className="nav-links" id="navLinks">
        <i className="fa fa-times" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "-200px";}} />
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/course">Course</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">contact</NavLink></li>
        </ul>
      </div>
      <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "0";}} />
    </nav>
    <h1>Register</h1>
  </section>
  {/* -----------About Us Content=================== */}
  <section className="login">
  <form>
    {/* <TextField
      id=""
      label="Enter Name"
    /> */}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="s_name" onChange={this.inputChanged} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="s_email" onChange={this.inputChanged} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="s_mobile" onChange={this.inputChanged} />
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="s_password" onChange={this.inputChanged}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button className="btn btn-primary center-block" onClick={this.registerUser}>Register!</button>
  <div className="mt-4 ">
      Already have an account?{" "}
      <NavLink to="/login">Login</NavLink>
    </div>
</form>

  </section>
            </div>
        )
    }
}

function mapStateToProps(appState){
  return{
    isUserLoggedIn:appState.isUserLoggedIn
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
        registerNewUser: registerNewUser,
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
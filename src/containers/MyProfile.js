import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {loginUser,logoutUser,updateUser} from '../actions/userAction';
import Swal from 'sweetalert2';
import PersonIcon from '@material-ui/icons/Person';
import { AccountCircle, ExitToApp } from '@material-ui/icons';


class MyProfile extends React.Component{
  constructor(){
    super();
    this.state={
    }
    this.inputChanged=this.inputChanged.bind(this);
    this.updateChanges=this.updateChanges.bind(this);
    this.logout=this.logout.bind(this);
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
  logout(event){
    event.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }
  updateChanges(event){
    event.preventDefault();
    console.log("state",this.state);
    this.props.updateUser(this.state);
    // alert("Login success");
    // this.props.history.push('/');
  }
    render() {
      console.log("In login","userLogged:"+this.props.isUserLoggedIn);
      if(!this.props.isUserLoggedIn){
        Swal.fire({
            icon: 'error',
            title: 'Unauthorized Access...!',
            text: 'Please login to access!',
            // footer: '<a href="/login">Please login to access</a>'
          })
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
          {this.props.isUserLoggedIn?
          <li className="nav-item dropdown" style={{padding:"0px"}}>
		        <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown" style={{padding:"0px"}}><PersonIcon/> {this.props.isUserLoggedIn.s_name}  </a>
		        <ul className="dropdown-menu" style={{color:"black",textAlign:"center",padding:"0px",outline:"none"}}>
			      <li><NavLink className="dropdown-item" to="/my-profile" style={{color:"black",padding:"0px 0px",textAlign:"justify"}}> <AccountCircle style={{marginRight:"10px"}}/>
            My Profile</NavLink></li>
			      <li><a className="dropdown-item" onClick={this.logout} href="#" style={{color:"black",padding:"0px"}}> <ExitToApp style={{marginRight:"20px"}}/> Logout </a></li>
		        </ul>
		      </li>:<li><NavLink to="/login">login</NavLink></li>}
        </ul>
      </div>
      <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "0";}} />
    </nav>
    <h1>Edit Profile</h1>
  </section>
  {/* -----------About Us Content=================== */}
  <section className="login">
  <form>
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
  <button className="btn btn-primary center-block" onClick={this.updateChanges}>Save Changes!</button>
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
      loginUser:loginUser,
      logoutUser:logoutUser,
      updateUser:updateUser
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(MyProfile)
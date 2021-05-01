import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {logoutUser} from '../actions/userAction';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

class About extends React.Component{
  constructor(){
    super();
    this.state={
      
    }
    this.logout=this.logout.bind(this)
  }
  logout(event){
    event.preventDefault();
    this.props.logoutUser();
    sessionStorage.removeItem("name");
    this.props.history.push('/');
  }
    render() {
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
		        <ul className="dropdown-menu" style={{color:"black",textAlign:"center",padding:"0px"}}>
			      <li><NavLink className="dropdown-item" to="/my-profile" style={{color:"black",padding:"0px 0px",textAlign:"justify"}}> <AccountCircle style={{marginRight:"10px"}}/>
            My Profile</NavLink></li>
			      <li><a className="dropdown-item" onClick={this.logout} href="#" style={{color:"black",padding:"0px"}}> <ExitToApp style={{marginRight:"20px"}}/> Logout </a></li>
		        </ul>
		      </li>:<li><NavLink to="/login">login</NavLink></li>}
        </ul>
      </div>
      <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "0";}} />
    </nav>
    <h1>About Us</h1>
  </section>
  {/* -----------About Us Content=================== */}
  <section className="about-us">
    <div className="row">
      <div className="about-col">
        <h1>We are the World Largest University</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores molestias obcaecati veniam alias pariatur sapiente accusamus perferendis voluptates? Laborum vitae quos eligendi, ut dolores delectus odio magni molestias quasi facilis.</p>
        <a href="" className="hero-btn red-btn">Explore Now</a>
      </div>
      <div className="about-col">
        <img src="images/about.jpg" alt="" />
      </div>
    </div>
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
      logoutUser:logoutUser
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (About);
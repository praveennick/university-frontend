import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {logoutUser} from '../actions/userAction';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import { AccountCircle, ExitToApp } from '@material-ui/icons';

class Contact extends React.Component{
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
    <h1>Contact Us</h1>
  </section>
  {/* -----------Location Us Content=================== */}
  <section className="location">
    <iframe title="hello" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30131.387751737904!2d73.11307008278385!3d19.263942279665663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79687b845489b%3A0x524d05a946a75ba5!2sKhadakpada%2C%20Kalyan%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1617428887719!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
  </section>
  {/* --------------------Contact us------------------ */}
  <section className="contact-us">
    <div className="row">
      <div className="contact-col">
        <div>
          <i className="fa fa-home" />
          <span>
            <h5>Mumbai-Agra Highway, Patil Building</h5>
            <p>Kalyan, Maharashtra, India</p>
          </span>
        </div>
        <div>
          <i className="fa fa-phone" />
          <span>
            <h5>+91 1234567890</h5>
            <p>Monday to Saturday, <br /> 10AM to 7PM</p>
          </span>
        </div>
        <div>
          <i className="fa fa-envelope" />
          <span>
            <h5>info@patiltech.com</h5>
            <p>Email us Your Query</p>
          </span>
        </div>
      </div>
      <div className="contact-col">
        <form>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="text" name="subject" placeholder="Enter Your Subject" required />
          <textarea rows={8} name="message" placeholder="Message" required defaultValue={""} />
          <button type="submit" className="hero-btn red-btn">Send Message</button>
        </form>
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

export default connect(mapStateToProps,mapDispatchToProps) (Contact)
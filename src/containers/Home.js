import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {logoutUser} from '../actions/userAction';


class Home extends React.Component{
    constructor(){
      super();
      this.state={
        
      }
      this.logout=this.logout.bind(this)
    }
    logout(event){
      event.preventDefault();
      this.props.logoutUser();
    }
    render() {
      
        return (
            <div>
            {this.logoutUser}
  <section className="header">
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
          {this.props.isUserLoggedIn?<li><NavLink onClick={this.logout} to="/">Logout</NavLink></li>:<li><NavLink to="/login">login</NavLink></li>}
         
          {console.log("is userLogedin in home:",this.props.isUserLoggedIn)}
        </ul>
      </div>
      <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "0";}} />
    </nav>
    <div className="text-box">
      <h1>World Best University</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam earum repudiandae <br /> minima vero numquam sit.</p>
      <NavLink to="#" className="hero-btn">Visit Us To Know More</NavLink>
    </div>  
  </section>
  {/* =======================Course=================== */}
  <section className="course">
    <h1>Courses We Offer</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, perspiciatis!</p>
    <div className="row">
      <div className="course-col">
        <h3>Intermediate</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ut, maxime consectetur iusto odit possimus!</p>
      </div>
      <div className="course-col">
        <h3>Degree</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ut, maxime consectetur iusto odit possimus!</p>
      </div>
      <div className="course-col">
        <h3>Post Graduation</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque ut, maxime consectetur iusto odit possimus!</p>
      </div>
    </div>
  </section>
  {/* ================= campus =========================*/}
  <section className="campus">
    <h1>Our Global Campus</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, dolores!</p>
    <div className="row">
      <div className="campus-col">
        <img src="images/london.png" alt="" />
        <div className="layer">
          <h3>London</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="images/newyork.png" alt="" />
        <div className="layer">
          <h3>New York</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="images/washington.png" alt="" />
        <div className="layer">
          <h3>Washington</h3>
        </div>
      </div>
    </div>
  </section>
  {/* -------------facilities-------------- */}
  <section className="facilities">
    <h1>Our Facilities</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed!</p>
    <div className="row">
      <div className="faci-col">
        <img src="images/library.png" alt="" />
        <h3>World Class Library</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusantium.</p>
      </div>
      <div className="faci-col">
        <img src="images/basketball.png" alt="" />
        <h3>Largest Play Ground</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusantium.</p>
      </div>
      <div className="faci-col">
        <img src="images/cafeteria.png" alt="" />
        <h3>Tasty And Healthy Food</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusantium.</p>
      </div>
    </div>
  </section>
  {/* ---------------Testimonials------------------ */}
  <section className="testimonials">
    <h1>What Our Students Says</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, accusantium?</p>
    <div className="row">
      <div className="testi-col">
        <img src="images/user1.jpg"  alt=""/>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at iste assumenda quod ducimus accusantium.</p>
          <h3>Div John</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-o" />
        </div>
      </div>
      <div className="testi-col">
        <img src="images/user2.jpg"  alt=""/>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae at iste assumenda quod ducimus accusantium.</p>
          <h3>John Div</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star-half-o" />
        </div>
      </div>
    </div>
  </section>
  {/* ------------Call to action-------------- */}
  <section className="action">
    <h1>Enroll for our various courses</h1>
    <NavLink to="/contact" className="hero-btn">Contact Us</NavLink>
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

export default connect(mapStateToProps,mapDispatchToProps) (Home);
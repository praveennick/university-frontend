import React from 'react';
import { NavLink } from 'react-router-dom';

class Course extends React.Component{
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
        </ul>
      </div>
      <i className="fa fa-bars" onClick={()=>{ var navLinks = document.getElementById("navLinks");navLinks.style.right = "0";}} />
    </nav>
    <h1>Our Courses</h1>
  </section>
  {/* -----------course=================== */}
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
  {/* ----------------Facilities-------------------- */}
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
        <h3>Tasty And Healt=""hy Food</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, accusantium.</p>
      </div>
    </div>
  </section>
 
            </div>
        )
    }
}

export default Course;
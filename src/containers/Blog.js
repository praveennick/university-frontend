import React from 'react';
import { NavLink } from 'react-router-dom';

class Blog extends React.Component{
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
    <h1>Our Certificates &amp; Online Programs For 2021</h1>
  </section>
  {/* -----------Blog Content=================== */}
  <section className="blog-content">
    <div className="row">
      <div className="blog-left">
        <img src="images/certificate.jpg" alt="" />
        <h2>Our Certificates &amp; Online Programs For 2021</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio enim molestiae commodi natus, officiis possimus nostrum deserunt iste repellendus doloribus expedita dolorum assumenda sed consectetur ratione sunt obcaecati porro.</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam qui illum possimus voluptas quasi repellendus, omnis alias, dignissimos tempore ex adipisci. Deleniti mollitia quidem dolorem minima itaque et error minus.</p><br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, expedita eligendi. Quo distinctio recusandae soluta odit nemo maxime temporibus dicta natus libero explicabo? Sapiente expedita quam quaerat voluptatibus asperiores ipsum.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis neque numquam. Sint inventore corporis tempora excepturi tempore sequi possimus ipsam deserunt repellendus quas alias nisi porro, quos ex. Quaerat.</p>
        <div className="comment-box">
          <h3>Leave a Comment</h3>
          <form className="comment-form">
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <textarea rows={5} placeholder="Your Comment" defaultValue={""} />
            <button type="submit" className="hero-btn red-btn">Post Comment</button>
          </form>
        </div>
      </div>
      <div className="blog-right">
        <h3>Post Categories</h3>
        <div>
          <span>Business Analytics</span>
          <span>21</span>
        </div>
        <div>
          <span>Data Science</span>
          <span>28</span>
        </div>
        <div>
          <span>Machine Learning</span>
          <span>34</span>
        </div>
        <div>
          <span>Computer Sceince</span>
          <span>42</span>
        </div>
        <div>
          <span>AotoCAD</span>
          <span>22</span>
        </div>
        <div>
          <span> Commerce</span>
          <span>30</span>
        </div>
      </div>
    </div>
  </section>
 
            </div>
        )
    }
}

export default Blog;
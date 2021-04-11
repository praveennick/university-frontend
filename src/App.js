// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './containers/Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Contact from './containers/Contact';
import Blog from './containers/Blog';
import About from './containers/About';
import Course from './containers/Course';
import Footer from './containers/Footer';
import Login from './containers/Login';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          {/* <Home/> */}
            {/* <Route exact path="/" component={HomePage}/> */}
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/about" component={About}/>
          <Route path="/course" component={Course}/>
          <Route path="/login" component={Login}/>
          <Footer/>

        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;

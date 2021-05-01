import React from 'react';

class Footer extends React.Component{
    render() {
        return (
            <div>
                 <section className="footer">
    <h4>About Us</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus, ad facilis harum in consectetur accusamus voluptatem perspiciatis culpa quos!</p>
    <div className="icons">
      <i className="fa fa-facebook" />
      <i className="fa fa-twitter" />
      <i className="fa fa-instagram" />
      <i className="fa fa-linkedin" />
    </div>
    <p>Made With <i className="fa fa-heart-o" /> by Praveen</p>
  </section>
            </div>
        )
    }
}

export default Footer;
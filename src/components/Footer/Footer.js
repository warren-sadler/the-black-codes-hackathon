import React, { Component } from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faSlack, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <footer>
              <div className="footer-top">
                <div className="left">
                  <h3>About</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis, eveniet quaerat saepe quam delectus nemo eaque. Perferendis molestias esse eaque nemo nisi voluptatum laborum debitis reiciendis eligendi? Itaque, non?</p>
                </div>
                <div className="right">
                  <h3>Connect</h3>
                  <div className="socialIcons">
                    <a href="https://www.instgram.com"><FontAwesomeIcon icon={ faInstagram } className="fa-3x" /></a>
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={ faFacebookF } className="fa-3x" /></a>
                    <a href="https://www.slack.com"><FontAwesomeIcon icon={ faSlack } className="fa-3x" /></a>
                    <a href="https://www.linkedin.com"><FontAwesomeIcon icon={ faLinkedin } className="fa-3x" /></a>
                    <a href="https://www.github.com"><FontAwesomeIcon icon={ faGithub } className="fa-3x" /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={ faTwitter } className="fa-3x" /></a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">

                <div className="copyright">
                  <p>&copy; 2020 - <a href="http://theblackcodes.org">The Black.Codes</a>. <br />All rights reserved.</p>
                </div>
              </div>
            </footer>
        )
    }
}

export default Footer;
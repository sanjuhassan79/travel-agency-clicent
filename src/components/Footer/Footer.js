import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        
        <div>
            <footer id="footer" className="footer-1">
<div className="main-footer widgets-dark typo-light">
<div className="container">
<div className="row">
  
<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget subscribe no-box">
<h5 className="widget-title">Rawccai<span></span></h5>
<p>Ready for party! Give it a finishing touch
by polishing </p>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5 className="widget-title">Quick Links<span></span></h5>
<ul className="thumbnail-widget">
<li>
<div><Link to="#.">Get Started</Link></div>	
</li>

<li>
<div><Link to="#.">Success Stories</Link></div>	
</li>

<li>
<div><Link to="#.">News</Link></div>	
</li>

<li>
<div><Link to="#.">About</Link></div>	
</li>
</ul>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5 className="widget-title">Get Started<span></span></h5>
<p>Great for getting creative with nail art Easy to remove Great as a top coat for any nail polish</p>

</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">

<div className="widget no-box">
<h5 className="widget-title">Contact Us<span></span></h5>

<p><Link to="info@admin.com">info@admin.com</Link></p>

</div>
</div>

</div>
</div>
</div>
  
<div className="footer-copyright">
<div className="container">
<div className="row">
<div className="col-md-12 text-center">
<p>Copyright nellie © 2022. All rights reserved.</p>
</div>
</div>
</div>
</div>
</footer>
        </div>
    );
};

export default Footer;
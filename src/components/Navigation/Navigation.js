import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';



import './Navbar.css'
const Navigation = () => {

  const{user,logout}=useAuth()
  console.log(user.email);
    return (
        <div>
          
        <Navbar sticky="top" collapseOnSelect expand="lg" className="top-nav py-3">
          <div className="container">
         <Navbar.Brand  href="#home"><img className="logow" src='https://www.pinclipart.com/picdir/big/368-3684726_egypt-clipart-oasis-sri-lanka-travel-agency-logo.png' alt="logo" /></Navbar.Brand> 

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="menu-list">
            <Nav >
    
              <Link className="navLink navLink__res" to="/">Home</Link>
              
              
              
               {user.email?
              <div className="Nav__res">
                <Link className="navLink navLink__res" to="/Dashboard">Dashboard</Link>
                
                <span className="mavName navLink__res">{user?.email.slice(0,10)}</span>
                <Link onClick={logout} className="navLink navLink__res" to="/"><span className="sinItem">Log out</span></Link>
                
              </div>
                :<div className="Nav__res"><Link className="navLink navLink__res" to="/Login"><span className="sinItem">Login</span></Link>
                <Link className="navLink navLink__res" to="/Register"><span className="sinItem">Register</span></Link></div>
              
              } 
              
    
              
              
              
              
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
        
      </div>
    );
};

export default Navigation;


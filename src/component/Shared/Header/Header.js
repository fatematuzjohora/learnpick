import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from "react-router-dom";
import auth from "../../../firebase.init";
import '../../Shared/CustomCss/Custom.css';

const Header = () => {
  const [user] =useAuthState(auth);
  const handleLogOut =() =>{
    signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white">
    <Container>
    <Navbar.Brand as={Link} to="/">
      <h3>LearnPick</h3>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      
      </Nav>
      <Nav className="fs-6 fw-bolder">
        <Nav.Link as={Link} to="/home" >HOME</Nav.Link>
        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
        <Nav.Link as={Link} to="/checkout">CHECKOUT</Nav.Link>
        <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>  
        <Nav.Link as={Link} to="/aboutMe" >ABOUT ME</Nav.Link>  
        {
          user ?(
            <Button
             className="button-style" onClick={handleLogOut}>
               SIGN OUT
              </Button>
          )
          :
          <Nav.Link as={Link} to="/login" className={({ isActive }) => (isActive ? "link-active" : "link")}>
          LOGIN
          </Nav.Link>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
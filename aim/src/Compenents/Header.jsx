import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React from "react";
import { logout } from "../redux/action/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./style.css"
const Header = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector(state => state.userLogin)
  const logoutHandler = () => {
      dispatch(logout())
  }
  return (
    <Navbar expand="lg" className=" mb-5 headers">
      <Container >
        <Navbar.Brand className="text-white" href="#home">Aim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  className="text-white"  href="#home">Admin</Nav.Link>
            <Nav.Link  className="text-white"  onClick={logoutHandler}>Logout</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

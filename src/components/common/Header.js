import React from 'react';
import {Link, IndexLink} from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './logo.svg';

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#"><IndexLink to="/" activeClassName="active">Home</IndexLink></NavItem>
        <NavItem eventKey={2} href="#"><IndexLink to="/about" activeClassName="active">About</IndexLink></NavItem>
      </Nav>
  </Navbar>
  );
};

export default Header;

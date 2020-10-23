import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navb = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>Users list</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav">
            Home
          </Link>
          <Link to="/users" className="nav">
            Users
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Navb;

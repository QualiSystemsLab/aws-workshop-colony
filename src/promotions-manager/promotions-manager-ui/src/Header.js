import React from "react";
import NavigationControl from "./Components/Navigation/NavigationControl";
import LoginControl from "./Components/Auth/LoginControl";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "60%",
  marginLeft: "-20%",
};
const promoManagerStyle = {
  fontSize: "20px",
  marginTop: "-0.5%",
  marginRight: "10%",
};

const navbarStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Header = () => (
  <Navbar inverse collapseOnSelect staticTop={true}>
    <div style={navbarStyle}>
      <Navbar.Header style={headerStyle}>
        <Navbar.Brand>
          <Link to="/" style={promoManagerStyle}>
            PROMO MANAGER
          </Link>
        </Navbar.Brand>
        <NavigationControl />
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LoginControl />
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;

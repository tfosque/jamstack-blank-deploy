import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto justify-content-end"
            style={{ width: "100%" }}
          >
            <Nav.Link href="/orders">Order History</Nav.Link>
            <Nav.Link href="/templates">Templates</Nav.Link>
            <Nav.Link href="/cartContainer">
              <span
                style={{
                  background: "#007bff",
                  padding: "6px 8px",
                  borderRadius: "4px",
                }}
              >
                Cart
              </span>
            </Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Address Book
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accounts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Personal Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Saved Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Delivery Tracking
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                <FontAwesomeIcon icon={faSignOutAlt} />
                &nbsp;Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addBook } from "../../store/bookReducerSlice";
import { Image } from "antd";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
const NavbarComponent = () => {
  const dispatch = useDispatch();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ width: "100%" }}
    >
      <Container style={{ maxWidth: "100%" }}>
        <Navbar.Brand href="#home">
          <Image
            src="book-logo.png"
            alt="bookstore-logo"
            width={100}
            height={50}
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => dispatch(addBook())}>Add Book</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" style={{ border: "none" }}>
                <SearchOutlined />
              </Button>
            </Form>
          </Nav>

          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="/cart">
              <ShoppingCartOutlined
                style={{ fontSize: "24px", color: "#1890ff" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

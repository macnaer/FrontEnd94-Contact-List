import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>
                <Link to="/">Navbar</Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/add-new-contact">New Contact</Link>
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

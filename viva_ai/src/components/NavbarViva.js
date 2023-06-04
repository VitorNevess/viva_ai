import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./NavbarViva.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export const NavbarViva = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Viva.AI</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Pricing">Planos</Nav.Link>
            <a href="/Onboarding"> 
              <Button variant="success">Começar</Button>
            </a>
          </Nav>
        </Container>
      </Navbar>
  )
}
// export default NavbarViva;
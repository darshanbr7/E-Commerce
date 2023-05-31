import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function NavbarEx() {
  return (
    <>
      
      <Navbar bg="" variant="dark" id='navbar'>
        <Container >
          <Navbar.Brand href="#home" className='logo'><h2><span>E-</span><span>C</span>ommerce</h2></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default NavbarEx;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.png';



function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#130f40' }}>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
            <img className="img-fluid" width={'150px'} src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='nav-link'>
              <Link
                to={'./mens'}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                Men's
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link
                to={'./womens'}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                Women's
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link
                to={'./wishlist'}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                <i className='fa-solid fa-heart text-danger me-2'></i> Wishlist
                <Badge className='ms-2 rounded' bg='light'>
                  {wishlist.length}
                </Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link
                to={'/cart'}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                <i className='fa-solid fa-cart-shopping me-2' style={{ color: '#f5ee2e' }}></i> Cart
                <Badge className='ms-2 rounded' bg='light'>
                  {cart.length}
                </Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


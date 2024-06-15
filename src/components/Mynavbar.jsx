import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function Mynavbar() {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-end'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-danger nav-link fw-bold' : 'nav-link'
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-danger nav-link fw-bold' : 'nav-link'
              }
              to='/products'
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-danger nav-link fw-bold' : 'nav-link'
              }
              to='/about'
            >
              About
            </NavLink>
            <NavLink></NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

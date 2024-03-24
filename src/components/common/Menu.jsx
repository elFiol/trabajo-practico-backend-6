import {Container, Nav, Navbar} from 'react-bootstrap';
import logoReceta from '../../assets/RoyalChef_logo.png'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logoReceta} alt="imagen del logo" className='img-fluid' width={150} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <NavLink end className='nav-link fs-2' to="/">Inicio</NavLink>
            <NavLink end className='nav-link fs-2' to="/administrador">Administrador</NavLink>
            <NavLink end className='nav-link fs-2' to="/nosotros">Nosotros</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

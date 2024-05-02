import {Navbar, Nav, Container} from 'react-bootstrap'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'

// import logo from '../assets/logo.png'
// <img src={logo} alt='ProShop'/>

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        ProShop
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse>
                    <Nav className='ms-auto'>
                        <LinkContainer to="/">
                            <Nav.Link><FaShoppingCart/> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link href='/login'><FaUser/> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    </header>
  )
}

export default Header
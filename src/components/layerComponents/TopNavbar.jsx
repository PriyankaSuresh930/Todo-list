import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../images/todo_icon.png';

const TopNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth')
        navigate("/login")
    }
    // Add event listener for popstate
    window.addEventListener('popstate', function(event) {
        event.preventDefault();
        if(localStorage.getItem('auth')) {
            navigate('/')
        }
    });
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className='px-2 px-lg-4 top-navbar'>
            <Container fluid>
                <Navbar.Brand href="/"><img src={logoImage} className='img-fluid'></img><span className='align-bottom logo-text ps-1'>T<span className='text-pink'>O</span>D<span className='text-pink'>O</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-5">
                        <Nav.Link to='/' as={Link}>Home</Nav.Link>
                        <Nav.Link to='/todo-list' as={Link}>Todo List</Nav.Link>
                    </Nav>
                    <span className='text-pink'>|</span>
                    <Navbar.Text className='justify-content-end'>
                        <Button type="button" onClick={handleLogout} variant="" className='button'>LOGOUT</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavbar;
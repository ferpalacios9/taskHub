import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./NavBar.css"



const NavigationBar = () => {
    return (
        <>
            <Navbar className='new__Nav' bg="dark" data-bs-theme="dark">
                <Container className='new__container'>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/taskHubWhite.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        TaskHub
                    </Navbar.Brand>
                    <Nav className="ajuste__nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#proyecto">New Project</Nav.Link>
                        <Nav.Link href="#equipos">Team</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;

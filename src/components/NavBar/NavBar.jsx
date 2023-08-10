import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./NavBar.css"
import { Link } from 'react-scroll';



const NavigationBar = () => {

    const refresh = () => window.location.reload(true)

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
                    <Nav className="link__nav">
                        <Nav.Link href="#home" onClick={refresh}>Home</Nav.Link>
                        <Nav.Link href="#proyecto">
                            <Link
                                to="form"
                                smooth={true}
                                duration={400}
                            >
                                New Project
                            </Link>
                        </Nav.Link>
                        <Nav.Link href="#equipos">
                            <Link
                                to="org"
                                smooth={true}
                                duration={400}
                            >
                                Team
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function LocalNavbar() {
    return (
        <Navbar>
            <Container className="flex bg-slate-800 p-3 rounded-lg">
                <Navbar.Brand className="font-bold" href="/">Joshua Ostblom</Navbar.Brand>
                <Nav>
                    <Nav.Link className="px-2" href="/">Home</Nav.Link>
                    <Nav.Link className="px-2" href="/resume">Resume</Nav.Link>
                    <Nav.Link className="px-2" href="/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default LocalNavbar;
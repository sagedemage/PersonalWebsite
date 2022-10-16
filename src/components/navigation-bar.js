import "./navigation-bar.css"

import github from '../assets/icons/github.webp';
import linkedin from '../assets/icons/linkedin.webp';

import { Nav, Navbar, Container } from 'react-bootstrap'

export const MyNavBar = () => {
    return (
    	<div className="mb">
            <Navbar collapseOnSelect className="mb" expand="lg" bg="myGreen" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">
                        <span className="indent"> Salmaan Saeed </span>
                    </Navbar.Brand>
            
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="projects"> Experimental Projects </Nav.Link>
                            <Nav.Link href="dev-environment"> My Dev Environment </Nav.Link>
                        </Nav>
						<Nav className="ms-auto">
							<Nav.Link href="https://github.com/sagedemage">
				    			<img className="icon-link" src={github} alt="my github page" width="30" height="30" />
							</Nav.Link>
							<Nav.Link href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    			<img className="icon-link" src={linkedin} alt="my linkedin page" width="30" height="30" />
							</Nav.Link>
						</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

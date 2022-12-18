import { Nav, Navbar, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export function MyNavBar() {
	return (
			<div className="mb">
				<Navbar collapseOnSelect expand="lg" bg="myGreen" variant="dark" fixed="top">
					<Container>
						<Navbar.Brand href="/">
							<span className="indent"> Astro App </span>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"  />
						<Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About </Nav.Link>
                        </Nav>
						<Nav className="ms-auto">
							<Nav.Link href="#"> Page 1 </Nav.Link>
                            <Nav.Link href="#"> Page 2 </Nav.Link>
						</Nav>
                    </Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		   );
}

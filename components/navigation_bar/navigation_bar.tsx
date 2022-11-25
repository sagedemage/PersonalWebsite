
import { Nav, Navbar, Container } from 'react-bootstrap'

export function MyNavBar() {
	return (
			<div>
				<Navbar collapseOnSelect expand="lg" bg="myGreen" variant="dark" fixed="top">
					<Container>
						<Navbar.Brand href="/">
							<span className="indent"> Salmaan Saeed </span>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"  />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="about"> About </Nav.Link>
								<Nav.Link href="dev"> Dev </Nav.Link>
							</Nav>
							<Nav className="ms-auto">
								<Nav.Link href="projects"> Projects </Nav.Link>
								<Nav.Link href="fun"> Fun </Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		   );
}

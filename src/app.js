
import React from "react";
import { Route, Routes} from "react-router-dom";

import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { DevEnvironment } from "./components/dev_environment";

import 'bootstrap/dist/css/bootstrap.css'

import "./app.css"

import github from './assets/icons/github.webp';
import linkedin from './assets/icons/linkedin.webp'; 

import { Nav, Navbar, Container } from 'react-bootstrap'

function App() {
return (
    <div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="myGreen" variant="dark" fixed="top">
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
        <br />
        <div className="gaps" id="content">
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='projects' element={<Projects />}> </Route>
                <Route path='dev-environment' element={<DevEnvironment />}> </Route>
            </Routes>
        </div>
        <footer className="gaps" id="bottom">
            <div id="copyright">
                <p id="copyright"> &copy; {(new Date().getFullYear())} Salmaan Saeed </p>
            </div>
	    </footer>
    </div>
    ) 
}

export default App

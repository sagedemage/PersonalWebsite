
import React from "react";
import { Route, Routes} from "react-router-dom";

import { Home } from "./components/home"
import { Computer } from "./components/computer"
import { System } from "./components/system"

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
                    <Navbar.Brand>
                        <span class="indent"> Salmaan Saeed </span>
                    </Navbar.Brand>
            
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="computer"> Computer Setup </Nav.Link>
                            <Nav.Link href="system"> Operating System </Nav.Link>
                        </Nav>
						<Nav className="me-auto">
							<Nav.Item>
			    				<a target="_blank" href="https://github.com/sagedemage">
				    				<img class="icon-link" src={github} alt="my github page" width="30" height="30" />
			    				</a>
							</Nav.Item>
							<Nav.Item>
			    				<a target="_blank" href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    				<img class="icon-link" src={linkedin} alt="my linkedin page" width="30" height="30" />
			    				</a>
							</Nav.Item>
						</Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <br />
        <div class="gaps" id="content">
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='computer' element={<Computer />}> </Route>
                <Route path='system' element={<System />}> </Route>
            </Routes>
        </div>
        <footer class="gaps" id="bottom">
            <div id="copyright">
                <p id="copyright"> &copy; {(new Date().getFullYear())} Salmaan Saeed </p>
            </div>
	    </footer>
    </div>
    ) 
}

export default App

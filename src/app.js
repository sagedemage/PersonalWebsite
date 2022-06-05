
import React from "react";
import { Route, Routes, Link} from "react-router-dom";

import { Home } from "./components/home"
import { Computer } from "./components/computer"
import { System } from "./components/system"

import 'bootstrap/dist/css/bootstrap.css'

import "./app.css"

import github from './assets/icons/github.webp';
import linkedin from './assets/icons/linkedin.webp'; 

import { Nav, Navbar } from 'react-bootstrap'


function App() {
return (
    <div>
    <div>
        <Navbar bg="myGreen" variant="dark" sticky="top">
            <Navbar.Brand>
                <span class="indent"> Salmaan Saeed </span>
            </Navbar.Brand>
            
            <Nav>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="computer"> Computer Setup </Nav.Link>
                <Nav.Link href="system"> Operating System </Nav.Link>
            </Nav>
        </Navbar>
    </div>
    <br />
    <div class="gaps">
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='computer' element={<Computer />}> </Route>
            <Route path='system' element={<System />}> </Route>
        </Routes>
    </div>
        <footer class="gaps">
		    <div id="links">
			    <a target="_blank" href="https://github.com/sagedemage">
				    <img class="icon-link" src={github} alt="my github page" width="30" height="30" />
			    </a>
			    <a target="_blank" href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    <img class="icon-link" src={linkedin} alt="my linkedin page" width="30" height="30" />
			    </a>
		    </div>
            <div id="copyright">
                <p id="copyright"> &copy; 2021 Salmaan Saeed </p>
            </div>
		</footer>
    </div>
    ) 
}

export default App

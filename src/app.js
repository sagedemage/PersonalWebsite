
import React from "react";
import { Route, Routes, Link} from "react-router-dom";

import { Home } from "./components/home"
import { About } from "./components/about"

import 'bootstrap/dist/css/bootstrap.css'

import "./app.css"

import { Nav, Navbar } from 'react-bootstrap'


function App() {
return (
    <div>
    <div>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
                <span class="indent"> Salmaan Saeed </span>
            </Navbar.Brand>
            
            <Nav>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="about"> About </Nav.Link>
            </Nav>
        </Navbar>
    </div>
    <br />
    <div class="gaps">
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='about' element={<About />}> </Route>
        </Routes>
    </div>
    </div>
    ) 
}

export default App

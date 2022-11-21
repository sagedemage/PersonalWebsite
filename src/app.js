import React from "react";
import { Route, Routes } from "react-router-dom";

import { MyNavBar } from "./components/navigation-bar/navigation-bar";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";
import { DevEnvironment } from "./components/dev_environment/dev_environment";

import 'bootstrap/dist/css/bootstrap.css'

import "./app.css"

function App() {
return (
    <div id="body">
		<MyNavBar />
        <div className="gaps" id="content">
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='projects' element={<Projects />}> </Route>
                <Route path='dev-environment' element={<DevEnvironment />}> </Route>
            </Routes>
        </div>
        <footer className="footer-bottom">
            <p id="copyright"> &copy; {(new Date().getFullYear())} Salmaan Saeed </p>
	    </footer>
    </div>
    ) 
}

export default App

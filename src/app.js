
import React from "react";
import { Route, Routes, Link} from "react-router-dom";

import { Home } from "./components/home"
import { About } from "./components/about"


function App() {
return (
    <>
        <nav>
            <Link to="/"> Home </Link> | {" "}
            <Link to="about"> About </Link>
        </nav>

        <br />

        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='about' element={<About />}> </Route>
        </Routes>
    </>
    ) 
}

export default App

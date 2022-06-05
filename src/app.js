
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home"
import { About } from "./components/about"


function App() {
return (
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='about' element={<About />}> </Route>
        </Routes>
    ) 
}

export default App

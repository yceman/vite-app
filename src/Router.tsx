import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router
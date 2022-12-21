import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
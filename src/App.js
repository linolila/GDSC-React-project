import React from 'react';
import Topbar from './components/topbar/Topbar';
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';
import { Single } from './pages/single/Single';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    const user = false;

    return (
        <Router>
            <Topbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={user ? <Home /> : <Register />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/write" element={user ? <Write /> : <Register />} />
                <Route path="/setting" element={user ? <Setting /> : <Register />} />
                <Route path="/post/:postid" element={<Single />} />
            </Routes>
        </Router>
    );
}

export default App;

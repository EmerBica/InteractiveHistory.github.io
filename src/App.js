// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StoryPage from './pages/StoryPage';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <Router basename="/InteractiveHistory.github.io">
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/story" element={<StoryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

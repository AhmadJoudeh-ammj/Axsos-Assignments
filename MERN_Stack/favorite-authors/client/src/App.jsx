import React from 'react';
// 1. Import Routes instead of Switch
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import CreateAuthor from './views/CreateAuthor';
import EditAuthor from './views/EditAuthor';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                {/* 2. Use the <Routes> component */}
                <Routes>
                    {/* 3. Define routes with the 'element' prop */}
                    
                    {/* Main dashboard route */}
                    <Route path="/authors" element={<Dashboard />} />

                    {/* Route for creating a new author */}
                    <Route path="/authors/new" element={<CreateAuthor />} />

                    {/* Route for editing an author, with a URL parameter :id */}
                    <Route path="/authors/:id/edit" element={<EditAuthor />} />
                    
                    {/* Redirect from the root path "/" to "/authors" */}
                    <Route path="/" element={<Navigate to="/authors" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
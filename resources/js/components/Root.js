import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import AdminDashboard from './AdminDashboard';
import Login from './Login';
import Navbar from './Navbar';

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/aboutUs" element={<About />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route
                    path="*"
                    element={
                        <div className="container mt-5">
                            <h1 className="text-center">404 Page Not Found</h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    </div>
);

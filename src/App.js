// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import LoginPage from './features/login/LoginPage';
import './styles/App.css';
import ProfilePage from "./features/profile/ProfilePage";
import SettingsPage from "./features/settings/SettingsPage"; // Aseguramos que los estilos globales estén importados

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/" element={<LoginPage />} /> {/* Por defecto, se redirige a Login */}
            </Routes>
        </Router>
    );
}

export default App;

// src/features/home/HomePage.js

import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/NavbarSection'; // Ajusta la ruta según sea necesario
import './HomePage.css';
import '../../styles/App.css';

function HomePage() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="home-container">
                <h1>Bienvenido a la Página de Inicio</h1>
                <p>Esta es la página principal de la aplicación.</p>
            </div>
        </div>
    );
}

export default HomePage;
// src/features/login/LoginPage.js

import React, { useState } from 'react';
import './LoginPage.css'; // Estilos específicos de LoginPage
import '../../styles/App.css'; // Si tus estilos están en una carpeta de 'styles' en la raíz
import { useNavigate } from 'react-router-dom'; // Para redirigir a otra página
import Header from '../../components/Header'; // Ajuste de ruta
import Login from '../../components/Login'; // Ajuste de ruta

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Para redirigir a la HomePage

    const handleLogin = (e) => {
        e.preventDefault();

        // Aquí podrías añadir la lógica de validación
        if (user && password) {
            // Redirige a la página principal (HomePage)
            navigate('/home');
        } else {
            alert('Por favor ingrese un usuario y una contraseña.');
        }
    };

    return (
        <div>
            <Header />
            <div style={{backgroundColor: '#333', height: '70px'}}></div>
            <main>
                <Login
                    user={user}
                    password={password}
                    handleLogin={handleLogin}
                    setUser={setUser}
                    setPassword={setPassword}
                />
            </main>
        </div>
    );
};

export default LoginPage;

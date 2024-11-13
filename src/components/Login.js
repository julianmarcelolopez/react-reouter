// src/components/Login.js

import React from 'react';
import './Login.css';  // Si tienes un archivo CSS específico para Login


const Login = ({ user, password, handleLogin, setUser, setPassword }) => {
    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="user">Usuario</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)} // setUser es una prop aquí
                    placeholder="Ingresa tu usuario"
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // setPassword es una prop aquí
                    placeholder="Ingresa tu contraseña"
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

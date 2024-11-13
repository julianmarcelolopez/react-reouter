import React from 'react';
import './ProfilePage.css';
import Header from "../../components/Header";
import Navbar from "../../components/NavbarSection";
import '../../styles/App.css';

function ProfilePage() {
  return (
      <div>
          <Header/>
          <Navbar/>
          <div className="profile-container">
              <h1>Perfil de Usuario</h1>
              <p>Aquí se muestra la información del perfil del usuario.</p>
          </div>
      </div>
  );
}

export default ProfilePage;

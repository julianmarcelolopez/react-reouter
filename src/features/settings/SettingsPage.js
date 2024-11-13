import React from 'react';
import './SettingsPage.css';
import Header from "../../components/Header";
import Navbar from "../../components/NavbarSection";
import '../../styles/App.css';

function SettingsPage() {
  return (
      <div>
          <Header/>
          <Navbar/>
          <div className="settings-container">
              <h1>Configuración</h1>
              <p>Aquí puedes ajustar la configuración de la aplicación.</p>
          </div>
      </div>

  )
      ;
}

export default SettingsPage;

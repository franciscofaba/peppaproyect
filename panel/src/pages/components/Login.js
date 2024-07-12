import React, { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios'; // Importa la configuración de Axios
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Spain from '../../images/Flag_of_Spain.svg';
import Usa from '../../images/Flag_of_the_United_States.svg';
import { NavDropdown } from 'react-bootstrap';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('global');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/Dashboard/login', { email, password });
      
      if (response.status === 200) {
        console.log('Login successful');
        navigate('/dashboard'); // Redirige al dashboard después del inicio de sesión
      } else {
        throw new Error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>{t('login.t1')}<br />{t('login.t2')}</h2>
          <NavDropdown
              className="text-light"
              id="nav-dropdown-3"
              title={t('inicio.t3')}
              menuVariant="light"
              style={{ fontSize: '23px' }}
            >
              <NavDropdown.Item>
                <button
                  onClick={() => i18n.changeLanguage('es')}
                  className="custom-button-idioma d-flex align-items-center"
                  style={{ maxWidth: '150px' }}
                >
                  <img
                    src={Spain}
                    alt="spain"
                    style={{ width: '20px', marginRight: '5px' }}
                  />
                  ES
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className="custom-button-idioma d-flex align-items-center"
                  style={{ maxWidth: '150px' }}
                >
                  <img
                    src={Usa}
                    alt="usa"
                    style={{ width: '20px', marginRight: '5px' }}
                  />
                  EN
                </button>
              </NavDropdown.Item>
            </NavDropdown>
            <p>{t('login.t3')}</p>
            </div>
        </div>

      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">{t('login.t4')}</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder={t('login.t4')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">{t('login.t5')}</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder={t('login.t5')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn btn-success">{t('login.t6')}</button>
              <button type="button" className="btn btn-primary">{t('login.t7')}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Spain from '../../images/Flag_of_Spain.svg';
import Usa from '../../images/Flag_of_the_United_States.svg';

const Navbar = ({ children }) => {
  const { t, i18n } = useTranslation('global');

  return (
    <>
      <div>
        <div className="wrapper">
          <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
              <a href="" className="simple-text logo-mini">
                <div className="logo-image-small">
                  {/* Add logo here */}
                </div>
                <p>CT</p>
              </a>
              <a href="" className="simple-text logo-normal">
                Dashboard
                <div className="logo-image-big">
                  {/* Add logo here */}
                </div>
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="active">
                  <Nav.Item>
                    <Nav.Link href="/Dashboard" eventKey="link-1">{t('inicio.t4')}</Nav.Link>
                  </Nav.Item>
                </li>
                <li>
                  <Nav.Item>
                    <Nav.Link href="/tables" eventKey="link-1">{t('tables.t1')}</Nav.Link>
                  </Nav.Item>
                </li>
                <li>
                  <Nav.Item>
                    <Nav.Link href="/Users" eventKey="link-1">{t('tables.t3')}</Nav.Link>
                  </Nav.Item>
                </li>
                <li>
                  <Nav.Item>
                    <Nav.Link href="/Justifications" eventKey="link-1">{t('justificaciones.t4')}</Nav.Link>
                  </Nav.Item>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel" style={{ height: '100vh' }}>
            <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
              <div className="container-fluid">
                <div className="navbar-wrapper">

                  <a className="navbar-brand" href="javascript:;">{t('inicio.t1')}</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                  <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                  <ul className="navbar-nav">
                    <li className="nav-item btn-rotate dropdown">
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavDropdown
                        className="text-light"
                        id="nav-dropdown-3"
                        title={t('inicio.t3')}
                        menuVariant="light"
                        style={{ marginRight: '20px', fontSize: '18px' }}
                      >
                        <NavDropdown.Item>
                          <button
                            onClick={() => i18n.changeLanguage('es')}
                            className="custom-button-idioma d-flex align-items-center"
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="content">
              <div className="row">
                <div className="col-md-12">
                  {children}
                </div>
              </div>
            </div>
            <footer className="footer" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <div className="container-fluid">
                <div className="row">
                  <nav className="footer-nav">
                    {/* Footer navigation here */}
                  </nav>
                  <div className="credits ml-auto">
                    <span className="copyright">
                      {/* Copyright info here */}
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* Core JS Files */}
        <script src="./assets/js/core/jquery.min.js"></script>
        <script src="./assets/js/core/popper.min.js"></script>
        <script src="./assets/js/core/bootstrap.min.js"></script>
        <script src="./assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        <script src="./assets/js/plugins/chartjs.min.js"></script>
        <script src="./assets/js/plugins/bootstrap-notify.js"></script>
        <script src="./assets/js/paper-dashboard.min.js?v=2.0.1" type="text/javascript"></script>
      </div>
    </>
  );
};

export default Navbar;

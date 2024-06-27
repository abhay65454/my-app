import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} aria-current="page" to="/about">{props.aboutus}</Link>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`} href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/#">Action</a></li>
                  <li><a className="dropdown-item" href="/#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/#">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutus: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutus: 'Set about us',
};

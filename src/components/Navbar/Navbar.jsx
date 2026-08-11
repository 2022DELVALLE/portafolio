import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import miFoto from '../../assets/images/fotoperfil.png';

const routes = [
    { path: '/home', label: 'Inicio' },
    { path: '/certificados', label: 'Certificados' },
    // { path: '/ventures', label: 'Ventures' },
    { path: '/estrategia', label: 'Ver la estrategia' },
    { path: '/visual-ia', label: 'Visual IA' },
    // { path: '/modelo-financiero', label: 'Finanzas' },
];


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const isActive = (path) => location.pathname === path;

    const handleNavigate = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    const closeMenuOnEscape = (e) => {
        if (e.key === 'Escape' && menuOpen) {
            setMenuOpen(false);
            navbarRef.current?.querySelector('.navbar__toggle')?.focus();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', closeMenuOnEscape);
        return () => document.removeEventListener('keydown', closeMenuOnEscape);
    }, [menuOpen]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="navbar" ref={navbarRef} aria-label="Navegación principal">
            <div className="navbar__container">
                <div className="navbar__brand" onClick={() => handleNavigate('/home')}>
                    <img src={miFoto} alt="" className="navbar__brand-img" />
                    <span className="navbar__brand--orange">KENYO</span>
                    <span className="navbar__brand--dark">DEL VALLE</span>
                </div>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-links"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>

                <ul
                    id="navbar-links"
                    className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
                    aria-hidden={!menuOpen}
                >
                    {routes.map((r) => (
                        <li key={r.path}>
                            <button
                                className={`navbar__link ${isActive(r.path) ? 'navbar__link--active' : ''}`}
                                onClick={() => handleNavigate(r.path)}
                                aria-current={isActive(r.path) ? 'page' : undefined}
                            >
                                {r.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
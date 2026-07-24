import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'ventures', label: 'Ventures' },
    { id: 'arquitectura', label: 'Arquitectura' },
    { id: 'portafolio', label: 'Portafolio' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map((s) => {
                const el = document.getElementById(s.id);
                return { id: s.id, top: el ? el.offsetTop - 100 : 0 };
            });

            const scrollY = window.scrollY;
            let current = 'inicio';

            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scrollY >= offsets[i].top) {
                    current = offsets[i].id;
                    break;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__brand" onClick={() => scrollTo('inicio')}>
                    <span className="navbar__brand--orange">KENYO</span>
                    <span className="navbar__brand--dark">DEL VALLE</span>
                </div>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {sections.map((s) => (
                        <li key={s.id}>
                            <button
                                className={`navbar__link ${activeSection === s.id ? 'navbar__link--active' : ''}`}
                                onClick={() => scrollTo(s.id)}
                            >
                                {s.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
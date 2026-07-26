import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 1. Iconos seleccionados estratégicamente para Negocios, IA y Finanzas
import {
    faBrain, faGears,
    faEnvelope, faLocationDot, faClock,
    faUsers, faRocket, faLightbulb, faPuzzlePiece,
    faChartLine, faHandshakeSimple, faScaleBalanced
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// 2. Importación de foto de perfil
import miFoto from '../../assets/images/fotoperfil.png';

const Hero = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setIsImageLoaded(true);
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);

        const handleMotionChange = (e) => {
            setReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleMotionChange);
        return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }, []);

    return (
        <section
            className="hero"
            id="inicio"
            aria-labelledby="hero-title"
            role="banner"
        >

            <div className="hero__decoration hero__decoration--top-left"></div>
            <div className="hero__decoration hero__decoration--bottom-right"></div>

            <div className="hero__main-container">

                {/* BLOQUE IZQUIERDO: Identidad y Propuesta de Valor */}
                <div className="hero__left">
                    <div className="hero__identity">
                        <h1 className="hero__name" id="hero-title">
                            <span className="hero__name--orange">KENYO</span><br />
                            <span className="hero__name--dark">DEL VALLE</span>
                        </h1>
                        {/* Rol de alto nivel enfocado en Negocios y Creación de Startups */}
                        <h2 className="hero__role">Estratega en modelos de ingresos y expansión comercial</h2>
                        <p className="hero__description">
                            Diseño modelos de negocio escalables que integran estrategia empresarial,
                            finanzas, tecnología e Inteligencia Artificial. Transformo ideas en
                            productos digitales y startups sostenibles mediante automatización,
                            desarrollo Full Stack y soluciones orientadas al crecimiento.
                        </p>
                    </div>

                    <div className="hero__contact-panel">
                        <div className="hero__contact-card">
                            <FontAwesomeIcon icon={faEnvelope} className="hero__contact-icon" />
                            <span>delalleyo@gmail.com</span>
                        </div>
                        <div className="hero__contact-card">
                            <FontAwesomeIcon icon={faLinkedin} className="hero__contact-icon" />
                            <span>/in/kenyodelvalle</span>
                        </div>
                        <div className="hero__contact-card">
                            <FontAwesomeIcon icon={faGithub} className="hero__contact-icon" />
                            <span>/kenyodelvalle</span>
                        </div>
                    </div>
                </div>

                {/* BLOQUE CENTRAL: Orbes e Iconos Flotantes de Habilidades Core */}
                <div className="hero__center">
                    <div className="hero__orbit hero__orbit--outer"></div>
                    <div className="hero__orbit hero__orbit--inner"></div>

                    <div className="hero__portrait-wrapper">
                        <img
                            src={miFoto}
                            alt="Kenyo Del Valle"
                            className="hero__portrait-img"
                        />
                    </div>

                    {/* Iconos que mezclan finanzas/estrategia con tecnología */}
                    <div className="hero__floating-card hero__floating-card--ai">
                        <FontAwesomeIcon icon={faChartLine} title="Estrategia Financiera y Crecimiento" />
                    </div>
                    <div className="hero__floating-card hero__floating-card--code">
                        <FontAwesomeIcon icon={faHandshakeSimple} title="Estrategia de Inversión y Pitch" />
                    </div>
                    <div className="hero__floating-card hero__floating-card--gears">
                        <FontAwesomeIcon icon={faBrain} title="Sistemas de Inteligencia Artificial" />
                    </div>
                    <div className="hero__floating-card hero__floating-card--cloud">
                        <FontAwesomeIcon icon={faScaleBalanced} title="Aspectos Legales para Startups" />
                    </div>
                    <div className="hero__floating-card hero__floating-card--shield">
                        <FontAwesomeIcon icon={faGears} title="Automatización de Procesos (n8n)" />
                    </div>
                </div>

                {/* BLOQUE DERECHO: Especialidades de Negocio y Tech */}
                <div className="hero__right">
                    <div className="hero__skills-panel">
                        <h3 className="hero__skills-title">Áreas de Especialización</h3>
                        <ul className="hero__skills-list">
                            {/* Prioridad absoluta a tu perfil estratega y corporativo */}
                            <li className="hero__skills-item">Estrategias de Inversión para Startups</li>
                            <li className="hero__skills-item">Análisis Financiero y Modelos de Negocio</li>
                            <li className="hero__skills-item">Aspectos Legales y Estructuración Corporativa</li>
                            <li className="hero__skills-item">Arquitectura de Agentes de IA y Voz</li>
                            <li className="hero__skills-item">Automatización Operativa Avanzada (n8n)</li>
                            <li className="hero__skills-item">Desarrollo e Infraestructura Full Stack</li>
                        </ul>
                    </div>

                    <div className="hero__status-panel">
                        <div className="hero__status-card">
                            <FontAwesomeIcon icon={faLocationDot} className="hero__status-icon" />
                            <span>Tarma, Perú (Global)</span>
                        </div>
                        <div className="hero__status-card">
                            <FontAwesomeIcon icon={faClock} className="hero__status-icon" />
                            <span>Buscando Co-founders / Inversores</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* BARRA INFERIOR: Atributos de Liderazgo */}
            <div className="hero__bottom-bar">
                <div className="hero__attribute">
                    <FontAwesomeIcon icon={faUsers} className="hero__attribute-icon" />
                    <span>Liderazgo y Modelado de Negocios</span>
                </div>
                <div className="hero__attribute">
                    <FontAwesomeIcon icon={faRocket} className="hero__attribute-icon" />
                    <span>Mentalidad Venture Capital & Escalabilidad</span>
                </div>
                <div className="hero__attribute">
                    <FontAwesomeIcon icon={faLightbulb} className="hero__attribute-icon" />
                    <span>Disrupción mediante IA Aplicada</span>
                </div>
                <div className="hero__attribute">
                    <FontAwesomeIcon icon={faPuzzlePiece} className="hero__attribute-icon" />
                    <span>Viabilidad Legal y Financiera</span>
                </div>
            </div>

        </section>
    );
};

export default Hero;
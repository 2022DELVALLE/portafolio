import React from 'react';
// Importación principal de FontAwesome solicitada
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importar los iconos específicos (Solid)
import {
    faAlignLeft, faLink, faPenNib, faCopyright, faChevronRight,
    faRobot, faMicrochip, faDatabase, faSliders, faCircleCheck,
    faTerminal, faBrain, faBolt, faLayerGroup,
    faTag, faChartLine, faCamera, faPalette, faImage, faUser
} from '@fortawesome/free-solid-svg-icons';

// Importar los iconos específicos (Regular)
// import { faImage, faUser } from '@fortawesome/free-regular-svg-icons';

// Importar los iconos específicos (Brands)
import { faNeos } from '@fortawesome/free-brands-svg-icons';

// Asegúrate de importar el archivo CSS que contiene las variables y estilos
import './PortfolioDashboard.css';

// Importar la imagen final
import finalFlyerImage from '../../assets/images/final.jpeg';

const PortfolioDashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Elementos decorativos esquinas */}
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>

            {/* ZONA SUPERIOR (20%) */}
            <header className="header-zone">
                <h1 className="main-title">
                    <span className="highlight">MI PORTAFOLIO</span><br />
                    <span className="black-text">Creación de Flyers IA</span>
                </h1>
                <div className="short-line"></div>
                <p className="subtitle">
                    Transformo <span className="highlight">ideas</span> en contenido visual de <span className="highlight">alto impacto</span> mediante <span className="highlight">inteligencia artificial</span>, diseño estratégico y edición profesional.
                </p>
            </header>

            {/* ZONA CENTRAL: Flujo Principal (60%) */}
            <section className="flow-zone">

                {/* Tarjeta 1: Entrada */}
                <article className="card">
                    <div className="card-header">
                        <div className="step-badge">01</div>
                        <div className="step-title">
                            <h4>Entrada</h4>
                            <span>Prompt</span>
                        </div>
                    </div>
                    <p className="card-description">Describe lo que necesitas.</p>

                    <div className="prompt-box">
                        <p>"Crea un flyer para un restaurante italiano, elegante, moderno, iluminación cinematográfica, pizza artesanal, colores cálidos, promoción del fin de semana..."</p>
                    </div>

                    <div className="card-icons-inline">
                        <FontAwesomeIcon icon={faAlignLeft} />
                        <FontAwesomeIcon icon={faImage} />
                        <FontAwesomeIcon icon={faLink} />
                        <FontAwesomeIcon icon={faPenNib} />
                        <FontAwesomeIcon icon={faCopyright} />
                    </div>
                </article>

                {/* Flecha de transición */}
                <div className="transition-arrow">
                    <div className="dots"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-head" />
                </div>

                {/* Tarjeta 2: Proceso IA */}
                <article className="card process-card">
                    <div className="floating-network">
                        <FontAwesomeIcon icon={faRobot} />
                        <FontAwesomeIcon icon={faMicrochip} />
                        <FontAwesomeIcon icon={faDatabase} />
                        <FontAwesomeIcon icon={faSliders} />
                    </div>
                    <div className="card-header">
                        <div className="step-badge">02</div>
                        <div className="step-title">
                            <h4>Proceso IA</h4>
                            <span>Generación de Variaciones</span>
                        </div>
                    </div>

                    <div className="variations-box">
                        <div className="thumbnails-container">
                            <div className="thumbnail elegant"></div>
                            <div className="thumbnail modern active-thumb"></div>
                            <div className="thumbnail minimal"></div>
                        </div>
                        <div className="carousel-indicators">
                            <span className="dot"></span>
                            <span className="dot active"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </article>

                {/* Flecha de transición */}
                <div className="transition-arrow">
                    <div className="dots"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="arrow-head" />
                </div>

                {/* Tarjeta 3: Resultado Final */}
                <article className="card result-card">
                    <div className="card-header">
                        <div className="step-badge">03</div>
                        <div className="step-title">
                            <h4>Resultado Final</h4>
                        </div>
                    </div>

                    <div className="result-content">
                        <div className="final-flyer">
                            <img src={finalFlyerImage} alt="Flyer Final Generado por IA" className="flyer-image" />
                        </div>
                        <div className="result-checks">
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Diseño listo para impresión</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Optimizado para redes</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Entrega en alta resolución</li>
                            </ul>
                        </div>
                    </div>
                </article>

            </section>

            {/* ZONA INFERIOR (20%) */}
            <section className="footer-zone">

                {/* Barra de habilidades */}
                <div className="skills-bar">
                    <div className="skill-item"><FontAwesomeIcon icon={faTerminal} /> Prompt Engineering</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faBrain} /> Midjourney</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faBolt} /> Flux</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faNeos} /> Photoshop</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faPenNib} /> Illustrator</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faLayerGroup} /> Composición</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faTag} /> Branding</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faChartLine} /> Marketing Visual</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faCamera} /> Fotografía IA</div>
                    <div className="skill-item"><FontAwesomeIcon icon={faPalette} /> Color</div>
                </div>

                {/* Mensaje y CTA */}
                <div className="bottom-actions">
                    <div className="message-card">
                        <FontAwesomeIcon icon={faUser} className="user-icon" />
                        <p>La <span className="highlight">creatividad</span> humana dirige el proceso. La <span className="highlight">inteligencia artificial</span> <span className="highlight">multiplica</span> las posibilidades.</p>
                    </div>

                    <div className="cta-signature">
                        <span className="cta-question">¿Tienes una idea?</span>
                        <span className="cta-action">Convirtámosla en una identidad visual.</span>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default PortfolioDashboard;
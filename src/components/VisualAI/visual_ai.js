import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { faPenNib } from '@fortawesome/free-solid-svg-icons/faPenNib';
import { faCopyright } from '@fortawesome/free-solid-svg-icons/faCopyright';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons/faMicrochip';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

import { faNeos } from '@fortawesome/free-brands-svg-icons/faNeos';

import './visual_ai.css';

import finalFlyerImage from '../../assets/images/final.jpeg';

const PortfolioDashboard = () => {
    return (
        <div className="visual-ai" id="visual-ia">
            <div className="visual-ai__corner visual-ai__corner--top-right"></div>
            <div className="visual-ai__corner visual-ai__corner--bottom-left"></div>

            <header className="visual-ai__header">
                <h1 className="visual-ai__title">
                    <span className="visual-ai__highlight">Creación</span><br />
                    <span className="visual-ai__title-black">de Flyers IA</span>
                </h1>
                <div className="visual-ai__divider"></div>
                <p className="visual-ai__subtitle">
                    Transformo <span className="visual-ai__highlight">ideas</span> en contenido visual de <span className="visual-ai__highlight">alto impacto</span> mediante <span className="visual-ai__highlight">inteligencia artificial</span>, diseño estratégico y edición profesional.
                </p>
            </header>

            <section className="visual-ai__flow">
                <article className="visual-ai__card">
                    <div className="visual-ai__card-header">
                        <div className="visual-ai__step-badge">01</div>
                        <div className="visual-ai__step-title">
                            <h4>Entrada</h4>
                            <span>Prompt</span>
                        </div>
                    </div>
                    <p className="visual-ai__card-desc">Describe lo que necesitas.</p>

                    <div className="visual-ai__prompt-box">
                        <p>"Crea un flyer para un restaurante italiano, elegante, moderno, iluminación cinematográfica, pizza artesanal, colores cálidos, promoción del fin de semana..."</p>
                    </div>

                    <div className="visual-ai__card-icons">
                        <FontAwesomeIcon icon={faAlignLeft} />
                        <FontAwesomeIcon icon={faImage} />
                        <FontAwesomeIcon icon={faLink} />
                        <FontAwesomeIcon icon={faPenNib} />
                        <FontAwesomeIcon icon={faCopyright} />
                    </div>
                </article>

                <div className="visual-ai__arrow">
                    <div className="visual-ai__arrow-dots"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="visual-ai__arrow-head" />
                </div>

                <article className="visual-ai__card visual-ai__card--process">
                    <div className="visual-ai__network">
                        <FontAwesomeIcon icon={faRobot} />
                        <FontAwesomeIcon icon={faMicrochip} />
                        <FontAwesomeIcon icon={faDatabase} />
                        <FontAwesomeIcon icon={faSliders} />
                    </div>
                    <div className="visual-ai__card-header">
                        <div className="visual-ai__step-badge">02</div>
                        <div className="visual-ai__step-title">
                            <h4>Proceso IA</h4>
                            <span>Generación de Variaciones</span>
                        </div>
                    </div>

                    <div className="visual-ai__variations">
                        <div className="visual-ai__thumbnails">
                            <div className="visual-ai__thumbnail visual-ai__thumbnail--elegant"></div>
                            <div className="visual-ai__thumbnail visual-ai__thumbnail--modern visual-ai__thumbnail--active"></div>
                            <div className="visual-ai__thumbnail visual-ai__thumbnail--minimal"></div>
                        </div>
                        <div className="visual-ai__indicators">
                            <span className="visual-ai__dot"></span>
                            <span className="visual-ai__dot visual-ai__dot--active"></span>
                            <span className="visual-ai__dot"></span>
                        </div>
                    </div>
                </article>

                <div className="visual-ai__arrow">
                    <div className="visual-ai__arrow-dots"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="visual-ai__arrow-head" />
                </div>

                <article className="visual-ai__card visual-ai__card--result">
                    <div className="visual-ai__card-header">
                        <div className="visual-ai__step-badge">03</div>
                        <div className="visual-ai__step-title">
                            <h4>Resultado Final</h4>
                        </div>
                    </div>

                    <div className="visual-ai__result-content">
                        <div className="visual-ai__final-flyer">
                            <img src={finalFlyerImage} alt="Flyer Final Generado por IA" className="visual-ai__flyer-image" />
                        </div>
                        <div className="visual-ai__result-checks">
                            <ul>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Diseño listo para impresión</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Optimizado para redes</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Entrega en alta resolución</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>

            <section className="visual-ai__footer">
                <div className="visual-ai__skills">
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faTerminal} /> Prompt Engineering</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faBrain} /> Midjourney</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faBolt} /> Flux</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faNeos} /> Photoshop</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faPenNib} /> Illustrator</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faLayerGroup} /> Composición</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faTag} /> Branding</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faChartLine} /> Marketing Visual</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faCamera} /> Fotografía IA</div>
                    <div className="visual-ai__skill-item"><FontAwesomeIcon icon={faPalette} /> Color</div>
                </div>

                <div className="visual-ai__actions">
                    <div className="visual-ai__message">
                        <FontAwesomeIcon icon={faUser} className="visual-ai__user-icon" />
                        <p>La <span className="visual-ai__highlight">creatividad</span> humana dirige el proceso. La <span className="visual-ai__highlight">inteligencia artificial</span> <span className="visual-ai__highlight">multiplica</span> las posibilidades.</p>
                    </div>

                    <div className="visual-ai__cta">
                        <span className="visual-ai__cta-question">¿Tienes una idea?</span>
                        <span className="visual-ai__cta-action">Convirtámosla en una identidad visual.</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioDashboard;
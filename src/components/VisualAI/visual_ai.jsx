import React, { useState, useEffect } from 'react';
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

// ==========================================
// 1. IMPORTACIÓN DE IMÁGENES PRINCIPALES
// ==========================================
import finalFlyerImage from '../../assets/visualaiimages/visualaiimage_05.jpg';
import var1 from '../../assets/visualaiimages/visualaiimage_06.jpg';
import var2 from '../../assets/visualaiimages/visualaiimage_03.jpg';
import var3 from '../../assets/visualaiimages/visualaiimage_04.jpg';

// ==========================================
// 2. IMPORTACIÓN DE IMÁGENES DE LA GALERÍA (15)
// ==========================================
import img1 from '../../assets/visualaiimages/visualaiimage_02.jpg';
import img2 from '../../assets/visualaiimages/visualaiimage_02.jpg';
import img3 from '../../assets/visualaiimages/visualaiimage_03.jpg';
import img4 from '../../assets/visualaiimages/visualaiimage_04.jpg';
import img5 from '../../assets/visualaiimages/visualaiimage_05.jpg';
import img6 from '../../assets/visualaiimages/visualaiimage_06.jpg';
import img7 from '../../assets/visualaiimages/visualaiimage_07.jpg';
import img8 from '../../assets/visualaiimages/visualaiimage_08.jpg';
import img9 from '../../assets/visualaiimages/visualaiimage_09.jpg';
import img10 from '../../assets/visualaiimages/visualaiimage_10.jpg';
import img11 from '../../assets/visualaiimages/visualaiimage_11.jpg';
import img12 from '../../assets/visualaiimages/visualaiimage_12.jpg';
import img13 from '../../assets/visualaiimages/visualaiimage_13.jpg';
import img14 from '../../assets/visualaiimages/visualaiimage_14.jpg';
import img15 from '../../assets/visualaiimages/visualaiimage_15.jpg';

// Arreglo para mapear fácilmente la galería
const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];

const PortfolioDashboard = () => {
    const [visibleCount, setVisibleCount] = useState(10);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeVariation, setActiveVariation] = useState(1);

    const handleLoadMore = () => {
        if (visibleCount >= galleryImages.length) {
            setVisibleCount(10);
        } else {
            setVisibleCount(prev => prev + 10);
        }
    };

    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const handleVariationClick = (index) => {
        setActiveVariation(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="visual-ai" id="visual-ia">
            <div className="visual-ai__corner visual-ai__corner--top-right"></div>
            <div className="visual-ai__corner visual-ai__corner--bottom-left"></div>

            <header className="visual-ai__header-container">
                <div className="visual-ai__header-top">
                    <div className="visual-ai__header-text">
                        <h1 className="visual-ai__title">
                            <span className="visual-ai__highlight">Creación</span><br />
                            <span className="visual-ai__title-black">de Flyers IA</span>
                        </h1>
                        <div className="visual-ai__divider"></div>
                        <p className="visual-ai__subtitle">
                            Transformo <span className="visual-ai__highlight">ideas</span> en contenido visual de <span className="visual-ai__highlight">alto impacto</span> mediante <span className="visual-ai__highlight">inteligencia artificial</span>, diseño estratégico y edición profesional.
                        </p>
                    </div>
                    <div className="visual-ai__cta">
                        <span className="visual-ai__cta-question">¿Tienes una idea?</span>
                        <span className="visual-ai__cta-action">Convirtámosla en una identidad visual.</span>
                    </div>
                </div>

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
            </header>

            {/* --- SECCIÓN DE GALERÍA (Mapeando el Array de Imports) --- */}
            <section className="visual-ai__gallery">
                <div className="visual-ai__header">
                    <h2 className="visual-ai__title" style={{ fontSize: "clamp(2rem, 2.5vw, 2.5rem)" }}>
                        <span className="visual-ai__title-black">Colección de</span> <span className="visual-ai__highlight">Diseños</span>
                    </h2>
                    <div className="visual-ai__divider"></div>
                    <p className="visual-ai__subtitle" style={{ marginBottom: "20px" }}>Explora el resto de proyectos generados a través de inteligencia artificial.</p>
                </div>

                <div className="visual-ai__gallery-masonry">
                    {/* Iteramos sobre las imágenes importadas */}
                    {galleryImages.slice(0, visibleCount).map((imgSrc, index) => (
                        <div key={index} className="visual-ai__gallery-item" onClick={() => handleImageClick(imgSrc)}>
                            <img
                                src={imgSrc}
                                alt={`Diseño Generado ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                
                <div className="visual-ai__gallery-actions">
                    <button className="visual-ai__load-more" onClick={handleLoadMore}>
                        {visibleCount >= galleryImages.length ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            </section>

            <section className="visual-ai__flow">
                {/* ... Tarjeta 1 (Entrada) sin cambios ... */}
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

                {/* Tarjeta 2 (Proceso IA con Variables importadas) */}
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
                            <span>Generación de visualaiimage_11</span>
                        </div>
                    </div>

                    <div className="visual-ai__variations">
                        <div className="visual-ai__thumbnails">
                            {[var1, var2, var3].map((img, index) => {
                                // Determine the class based on distance to active
                                let positionClass = "visual-ai__thumbnail--side";
                                if (index === activeVariation) {
                                    positionClass = "visual-ai__thumbnail--active";
                                }
                                return (
                                    <img 
                                        key={index} 
                                        src={img} 
                                        alt={`Variación ${index + 1}`} 
                                        className={`visual-ai__thumbnail ${positionClass}`} 
                                        onClick={() => handleVariationClick(index)}
                                    />
                                );
                            })}
                        </div>
                        <div className="visual-ai__indicators">
                            {[0, 1, 2].map((index) => (
                                <span 
                                    key={index} 
                                    className={`visual-ai__dot ${index === activeVariation ? 'visual-ai__dot--active' : ''}`}
                                    onClick={() => handleVariationClick(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </article>

                <div className="visual-ai__arrow">
                    <div className="visual-ai__arrow-dots"></div>
                    <FontAwesomeIcon icon={faChevronRight} className="visual-ai__arrow-head" />
                </div>

                {/* Tarjeta 3 (Final Flyer) */}
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

            {/* Galería movida arriba */}



            {selectedImage && (
                <div className="visual-ai__modal" onClick={closeModal}>
                    <button className="visual-ai__modal-close" onClick={closeModal}>&times;</button>
                    <img src={selectedImage} alt="Vista ampliada" className="visual-ai__modal-img" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default PortfolioDashboard;
import React from 'react';
import './SystemsArchitecture.css';

// Importar el componente de React FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importar exactamente los íconos del set solid instalados
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons/faWarehouse';
import { faShip } from '@fortawesome/free-solid-svg-icons/faShip';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons/faNetworkWired';
import { faFileContract } from '@fortawesome/free-solid-svg-icons/faFileContract';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faRoute } from '@fortawesome/free-solid-svg-icons/faRoute';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons/faScaleBalanced';
import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const SystemsArchitecture = () => {
    return (
        <section className="architecture" id="arquitectura">
            {/* Fondo Decorativo: Nodos y Órbitas */}
            <div className="architecture__background">
                <div className="architecture__orbit architecture__orbit--1"></div>
                <div className="architecture__orbit architecture__orbit--2"></div>
                <div className="architecture__micro-nodes"></div>
            </div>

            <div className="architecture__container">

                {/* TÍTULO Y SUBTÍTULO */}
                <header className="architecture__header">
                    <h2 className="architecture__title">
                        <span className="architecture__title-line1">Framework de Análisis:</span><br />
                        <span className="architecture__title-line2">Puntos de Influencia<br />en Sistemas de Negocio</span>
                    </h2>
                    <div className="architecture__title-divider"></div>
                    <p className="architecture__subtitle">
                        Los mercados no se ganan vendiendo más barato.<br />
                        Se ganan <span className="architecture__highlight">reconfigurando el flujo</span> tradicional
                        de una industria y maximizando la <span className="architecture__highlight">captura de valor</span>.
                    </p>
                </header>

                {/* BLOQUE 1: EL PUNTO DE INFLUENCIA */}
                <div className="architecture__leverage">
                    <div className="architecture__leverage-icon-wrapper">
                        <FontAwesomeIcon icon={faBullseye} className="architecture__leverage-icon" />
                    </div>
                    <div className="architecture__leverage-content">
                        <h3 className="architecture__leverage-title">El Punto de Influencia</h3>
                        <p className="architecture__leverage-desc">
                            Cada sistema comercial tiene un nodo ciego.<br />
                            Un análisis estratégico no busca optimizar todo el sistema.
                            Busca el punto exacto donde una intervención quirúrgica altera las reglas del juego
                            y redefine la captura de valor.
                        </p>
                    </div>
                </div>

                {/* ETIQUETA DE CONTEXTO / CASO DE ESTUDIO */}
                <div className="architecture__case-study-tag">
                    <span className="architecture__case-study-badge">Caso de Estudio</span>
                    <h3 className="architecture__case-study-title">Análisis de Sistema: Modelo Temu vs. Retail Tradicional</h3>
                </div>

                {/* BLOQUE 2: EL ESPEJO ANALÍTICO */}
                <div className="architecture__comparator">

                    {/* Panel Izquierdo: Tradicional */}
                    <div className="architecture__panel architecture__panel--traditional">
                        <div className="architecture__panel-header">
                            <h4 className="architecture__panel-title">Alta Fricción & Margen Diluido</h4>
                        </div>

                        <div className="architecture__flow">
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faIndustry} className="architecture__node-icon" />
                                <span className="architecture__node-label">Fábrica</span>
                            </div>
                            <div className="architecture__flow-connection">
                                <span className="architecture__metric">+18% margen<br />+3 días</span>
                            </div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faWarehouse} className="architecture__node-icon" />
                                <span className="architecture__node-label">Mayorista</span>
                            </div>
                            <div className="architecture__flow-connection">
                                <span className="architecture__metric">+15% margen<br />+5 días</span>
                            </div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faShip} className="architecture__node-icon" />
                                <span className="architecture__node-label">Importador</span>
                            </div>
                            <div className="architecture__flow-connection"></div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faTruck} className="architecture__node-icon" />
                                <span className="architecture__node-label">Distrib.</span>
                            </div>
                            <div className="architecture__flow-connection">
                                <span className="architecture__metric">+12% margen<br />+2 días</span>
                            </div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faStore} className="architecture__node-icon" />
                                <span className="architecture__node-label">Tienda</span>
                            </div>
                            <div className="architecture__flow-connection"></div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faUser} className="architecture__node-icon" />
                                <span className="architecture__node-label">Cliente</span>
                            </div>
                        </div>

                        <div className="architecture__results architecture__results--negative">
                            <ul>
                                <li>Costo Acumulado <span>↑</span></li>
                                <li>Latencia <span>↑</span></li>
                                <li>Riesgo de Inventario <span>↑</span></li>
                                <li>Margen Disponible <span>↓</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Panel Central: VS */}
                    <div className="architecture__vs">VS</div>

                    {/* Panel Derecho: Optimizado */}
                    <div className="architecture__panel architecture__panel--optimized">
                        <div className="architecture__panel-header">
                            <h4 className="architecture__panel-title architecture__panel-title--green">Modelo Optimizado de Flujo Conectado</h4>
                        </div>

                        <div className="architecture__flow architecture__flow--clean">
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faIndustry} className="architecture__node-icon" />
                                <span className="architecture__node-label">Fábrica</span>
                            </div>
                            <div className="architecture__flow-connection architecture__flow-connection--fast"></div>

                            <div className="architecture__node architecture__node--central">
                                <div className="architecture__node-glow"></div>
                                <FontAwesomeIcon icon={faNetworkWired} className="architecture__node-icon architecture__node-icon--large" />
                                <span className="architecture__node-label">Flujo<br />Optimizado</span>
                            </div>

                            <div className="architecture__flow-connection architecture__flow-connection--fast"></div>
                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faFileContract} className="architecture__node-icon" />
                                <span className="architecture__node-label">Aduanas</span>
                            </div>
                            <div className="architecture__flow-connection architecture__flow-connection--fast"></div>

                            <div className="architecture__node">
                                <FontAwesomeIcon icon={faUser} className="architecture__node-icon" />
                                <span className="architecture__node-label">Cliente</span>
                            </div>
                        </div>

                        <div className="architecture__results architecture__results--positive">
                            <ul>
                                <li>Menor Fricción</li>
                                <li>Menor Latencia</li>
                                <li>Menor Riesgo</li>
                                <li><strong>Mayor Captura de Valor</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* TARJETA DE TESIS */}
                <div className="architecture__thesis">
                    <FontAwesomeIcon icon={faLightbulb} className="architecture__thesis-icon" />
                    <p className="architecture__thesis-text">
                        La ventaja competitiva no proviene del producto.<br />
                        <strong>Proviene de la arquitectura del flujo.</strong>
                    </p>
                </div>

                {/* BLOQUE 3: 3 CAPAS DE GESTIÓN */}
                <div className="architecture__layers">
                    {/* Capa 1 */}
                    <div className="architecture__layer-card">
                        <div className="architecture__layer-header">
                            <span className="architecture__layer-number">1</span>
                            <FontAwesomeIcon icon={faRoute} className="architecture__layer-icon" />
                        </div>
                        <h4 className="architecture__layer-title">Flujo de Trabajo</h4>
                        <ul className="architecture__layer-list">
                            <li>Mapeo del recorrido físico del activo.</li>
                            <li>Identificación de cuellos de botella.</li>
                            <li>Diseño de cadenas más cortas y eficientes.</li>
                        </ul>
                    </div>

                    {/* Capa 2 */}
                    <div className="architecture__layer-card">
                        <div className="architecture__layer-header">
                            <span className="architecture__layer-number">2</span>
                            <FontAwesomeIcon icon={faChartPie} className="architecture__layer-icon" />
                        </div>
                        <h4 className="architecture__layer-title">Flujo Financiero</h4>
                        <ul className="architecture__layer-list">
                            <li>Economía Unitaria.</li>
                            <li>Captura de Valor.</li>
                            <li>Modelos de Ingresos.</li>
                            <li>Escenarios Financieros.</li>
                            <li>Rentabilidad.</li>
                        </ul>
                    </div>

                    {/* Capa 3 */}
                    <div className="architecture__layer-card">
                        <div className="architecture__layer-header">
                            <span className="architecture__layer-number">3</span>
                            <FontAwesomeIcon icon={faScaleBalanced} className="architecture__layer-icon" />
                        </div>
                        <h4 className="architecture__layer-title">Flujo Legal</h4>
                        <ul className="architecture__layer-list">
                            <li>Cumplimiento Normativo.</li>
                            <li>Aduanas y Aranceles.</li>
                            <li>Contratos.</li>
                            <li>Propiedad Intelectual.</li>
                        </ul>
                    </div>
                </div>

                {/* CTA FINAL */}
                <div className="architecture__cta">
                    <div className="architecture__cta-icon-wrapper">
                        <FontAwesomeIcon icon={faChartLine} className="architecture__cta-main-icon" />
                    </div>
                    <div className="architecture__cta-content">
                        <h3 className="architecture__cta-title">
                            ¿Existe un punto de influencia oculto en tu industria que esté absorbiendo margen, velocidad o crecimiento?
                        </h3>
                        <p className="architecture__cta-desc">
                            Diseñemos el mapa del sistema, identifiquemos el nodo crítico y construyamos una ventaja competitiva.
                        </p>
                    </div>
                    <button className="architecture__cta-btn">
                        Explorar Arquitectura <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default SystemsArchitecture;
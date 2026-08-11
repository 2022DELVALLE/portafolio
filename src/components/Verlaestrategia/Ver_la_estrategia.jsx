import React from 'react';
import './Ver_la_estrategia.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const VerLaEstrategia = () => {
    return (
        <section className="estrategia" id="ver-la-estrategia">

            {/* Fondo decorativo */}
            <div className="estrategia__background" aria-hidden="true">
                <div className="estrategia__orbit estrategia__orbit--1"></div>
                <div className="estrategia__orbit estrategia__orbit--2"></div>
                <div className="estrategia__micro-nodes"></div>
            </div>

            <div className="estrategia__container">

                {/* HEADER */}
                <header className="estrategia__header">
                    <h2 className="estrategia__title">
                        <span className="estrategia__title--dark">El precio es el resultado.</span><br />
                        <span className="estrategia__title--accent">El flujo es la estrategia.</span>
                    </h2>
                </header>

                {/* CASO DE ESTUDIO */}
                <div className="estrategia__caso">
                    <span className="estrategia__caso-badge">Caso de Estudio</span>
                    <h3 className="estrategia__caso-titulo">Temu: vender más barato sin reducir la calidad</h3>
                    <p className="estrategia__caso-desc">
                        La diferencia no comienza en la oferta ni en la demanda. Comienza en la arquitectura que conecta fábrica y cliente.
                        Cuando el recorrido acumula menos intermediarios, inventario, espera y margen de canal, el precio final puede bajar
                        sin alterar necesariamente la calidad del producto.
                    </p>
                </div>

                {/* COMPARADOR */}
                <div className="estrategia__comparador">

                    {/* Panel tradicional */}
                    <div className="estrategia__panel estrategia__panel--tradicional">
                        <div className="estrategia__panel-header">
                            <h4 className="estrategia__panel-titulo">Más capas. Más costo. Más precio.</h4>
                            <p className="estrategia__panel-intro">
                                Cada nodo captura una parte del valor y traslada su costo al siguiente.
                                El cliente termina pagando toda la cadena.
                            </p>
                        </div>

                        <div className="estrategia__flujo">
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faIndustry} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Fábrica</span>
                            </div>
                            <div className="estrategia__conexion">
                                <span className="estrategia__metrica">+18% costo/margen<br />+3 días</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faWarehouse} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Mayorista</span>
                            </div>
                            <div className="estrategia__conexion">
                                <span className="estrategia__metrica">+15% costo/margen<br />+5 días</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faShip} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Importador</span>
                            </div>
                            <div className="estrategia__conexion">
                                <span className="estrategia__metrica">+10% operación<br />+4 días</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faTruck} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Distrib.</span>
                            </div>
                            <div className="estrategia__conexion">
                                <span className="estrategia__metrica">+12% costo/margen<br />+2 días</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faStore} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Tienda</span>
                            </div>
                            <div className="estrategia__conexion">
                                <span className="estrategia__metrica">+25% retail<br />+inventario</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faUser} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Cliente</span>
                            </div>
                        </div>

                        <p className="estrategia__metrica-nota">
                            Porcentajes ilustrativos: muestran cómo cada etapa puede acumular costo sobre la anterior.
                        </p>

                        <div className="estrategia__acumulacion">
                            <span>Precio de fábrica</span>
                            <strong>+ múltiples capas acumuladas</strong>
                            <span>= precio final más alto</span>
                        </div>

                        <div className="estrategia__resultados estrategia__resultados--negativo">
                            <ul>
                                <li>Más intermediarios <span>↑</span></li>
                                <li>Costo acumulado <span>↑</span></li>
                                <li>Tiempo y riesgo <span>↑</span></li>
                                <li>Eficiencia del flujo <span>↓</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* VS badge */}
                    <div className="estrategia__vs" aria-hidden="true">VS</div>

                    {/* Panel optimizado */}
                    <div className="estrategia__panel estrategia__panel--optimizado">
                        <div className="estrategia__panel-header">
                            <h4 className="estrategia__panel-titulo estrategia__panel-titulo--acento">
                                Menos fricción. Más eficiencia. Mejor precio.
                            </h4>
                            <p className="estrategia__panel-intro">
                                Temu reduce capas que no mejoran el producto y concentra el valor en producción, coordinación y entrega.
                            </p>
                        </div>

                        <div className="estrategia__flujo estrategia__flujo--limpio">
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faIndustry} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Fábrica</span>
                            </div>
                            <div className="estrategia__conexion estrategia__conexion--rapida">
                                <span className="estrategia__metrica estrategia__metrica--positiva">datos + demanda</span>
                            </div>
                            <div className="estrategia__nodo estrategia__nodo--central">
                                <div className="estrategia__nodo-glow" aria-hidden="true"></div>
                                <FontAwesomeIcon icon={faNetworkWired} className="estrategia__nodo-icono estrategia__nodo-icono--grande" />
                                <span className="estrategia__nodo-etiqueta">Flujo<br />Optimizado</span>
                            </div>
                            <div className="estrategia__conexion estrategia__conexion--rapida">
                                <span className="estrategia__metrica estrategia__metrica--positiva">menos capas</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faFileContract} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Aduanas</span>
                            </div>
                            <div className="estrategia__conexion estrategia__conexion--rapida">
                                <span className="estrategia__metrica estrategia__metrica--positiva">entrega directa</span>
                            </div>
                            <div className="estrategia__nodo">
                                <FontAwesomeIcon icon={faUser} className="estrategia__nodo-icono" />
                                <span className="estrategia__nodo-etiqueta">Cliente</span>
                            </div>
                        </div>

                        <div className="estrategia__acumulacion estrategia__acumulacion--positiva">
                            <span>Mismo producto base</span>
                            <strong>− capas innecesarias</strong>
                            <span>= menor precio estructural</span>
                        </div>

                        <div className="estrategia__resultados estrategia__resultados--positivo">
                            <ul>
                                <li>Menos intermediarios</li>
                                <li>Menor costo de canal</li>
                                <li>Menor inventario ocioso</li>
                                <li><strong>Más valor para precio y margen</strong></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* TESIS */}
                <div className="estrategia__tesis">
                    <FontAwesomeIcon icon={faLightbulb} className="estrategia__tesis-icono" />
                    <p className="estrategia__tesis-texto">
                        Optimizar no es fabricar peor.<br />
                        <strong>Es dejar de cobrarle al cliente por una estructura ineficiente.</strong>
                    </p>
                </div>

                {/* CAPAS DE GESTIÓN */}
                <div className="estrategia__capas">

                    <div className="estrategia__capa-card">
                        <div className="estrategia__capa-header">
                            <span className="estrategia__capa-numero">1</span>
                            <FontAwesomeIcon icon={faRoute} className="estrategia__capa-icono" />
                        </div>
                        <h4 className="estrategia__capa-titulo">Flujo Operativo</h4>
                        <ul className="estrategia__capa-lista">
                            <li>Mapear cada actor y transferencia.</li>
                            <li>Medir tiempos, inventario y fricción.</li>
                            <li>Eliminar etapas que no transforman valor.</li>
                        </ul>
                    </div>

                    <div className="estrategia__capa-card">
                        <div className="estrategia__capa-header">
                            <span className="estrategia__capa-numero">2</span>
                            <FontAwesomeIcon icon={faChartPie} className="estrategia__capa-icono" />
                        </div>
                        <h4 className="estrategia__capa-titulo">Flujo Financiero</h4>
                        <ul className="estrategia__capa-lista">
                            <li>Separar costo del producto y costo del canal.</li>
                            <li>Cuantificar lo que suma cada flujo.</li>
                            <li>Modelar precio, margen y escala.</li>
                            <li>Redistribuir el valor capturado.</li>
                        </ul>
                    </div>

                    <div className="estrategia__capa-card">
                        <div className="estrategia__capa-header">
                            <span className="estrategia__capa-numero">3</span>
                            <FontAwesomeIcon icon={faScaleBalanced} className="estrategia__capa-icono" />
                        </div>
                        <h4 className="estrategia__capa-titulo">Flujo Legal</h4>
                        <ul className="estrategia__capa-lista">
                            <li>Integrar aduanas, aranceles y cumplimiento.</li>
                            <li>Diseñar contratos para reducir incertidumbre.</li>
                            <li>Proteger propiedad intelectual y trazabilidad.</li>
                            <li>Evitar que la optimización traslade riesgo.</li>
                        </ul>
                    </div>

                </div>

                {/* CTA FINAL */}
                <div className="estrategia__cta">
                    <div className="estrategia__cta-icono-wrapper">
                        <FontAwesomeIcon icon={faChartLine} className="estrategia__cta-icono-principal" />
                    </div>
                    <div className="estrategia__cta-contenido">
                        <h3 className="estrategia__cta-titulo">
                            ¿Qué parte del flujo está encareciendo tu oferta sin mejorar el producto que recibe el cliente?
                        </h3>
                        <p className="estrategia__cta-desc">
                            Mapeamos la arquitectura completa, cuantificamos cada capa y rediseñamos el sistema para competir desde la estructura, no solamente desde el precio.
                        </p>
                    </div>
                    <button className="estrategia__cta-btn">
                        Explorar Estrategia <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default VerLaEstrategia;
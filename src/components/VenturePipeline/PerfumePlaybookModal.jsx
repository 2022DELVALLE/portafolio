import React, { useState } from 'react';
import './PerfumePlaybookModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons/faCashRegister';
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons/faClipboardCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faTint } from '@fortawesome/free-solid-svg-icons/faTint';
import { faFlask } from '@fortawesome/free-solid-svg-icons/faFlask';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons/faUsersRectangle';
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons/faShieldHeart';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons/faUserCheck';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

const PerfumePlaybookModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('flujo');

    return (
        <div className="pb-modal" onClick={onClose}>
            <div className="pb-modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="pb-modal__close" onClick={onClose} aria-label="Cerrar modal">
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="pb-modal__body">
                    <h2 className="sr-only">Playbook Interno de Perfumerías — Sistema de Optimización de Ingresos por Kenyo</h2>

                    <div className="pb-modal__header">
                        <div className="pb-modal__badge">Documento Ejecutivo — Uso Interno</div>
                        <div className="pb-modal__title">Playbook Integral: Arquitectura de Ingresos para Perfumerías</div>
                        <div className="pb-modal__sub">Estratega: Kenyo &nbsp;·&nbsp; Mercado objetivo: Tarma, Perú &nbsp;·&nbsp; Versión 2.0 — Modelo Completo</div>
                    </div>

                    <div className="pb-modal__tabs">
                        <button className={`pb-modal__tab-btn ${activeTab === 'flujo' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('flujo')}>
                            <FontAwesomeIcon icon={faCashRegister} /> Flujo de caja
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'psico' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('psico')}>
                            <FontAwesomeIcon icon={faBrain} /> Psicología
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'mgm' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('mgm')}>
                            <FontAwesomeIcon icon={faUsers} /> Sistema MGM
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'finanzas' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('finanzas')}>
                            <FontAwesomeIcon icon={faChartBar} /> Finanzas
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'legal' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('legal')}>
                            <FontAwesomeIcon icon={faShieldAlt} /> Legal
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'operacion' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('operacion')}>
                            <FontAwesomeIcon icon={faCog} /> Operación
                        </button>
                        <button className={`pb-modal__tab-btn ${activeTab === 'auditoria' ? 'pb-modal__tab-btn--active' : ''}`} onClick={() => setActiveTab('auditoria')}>
                            <FontAwesomeIcon icon={faClipboardCheck} /> Auditoría
                        </button>
                    </div>

                    {/* ====== TAB 1: FLUJO DE CAJA ====== */}
                    {activeTab === 'flujo' && (
                        <div className="tab-panel active">
                            <p className="section-intro">El objetivo central es transformar el modelo de venta de botella completa (transacción única, alta fricción) en un sistema de micro-ingresos recurrentes, alta frecuencia y conversión diferida. Cada metro cuadrado y cada botella abierta es un activo que genera caja.</p>

                            <div className="metrics-grid">
                                <div className="metric-card">
                                    <div className="metric-label">Sprays / botella 100ml</div>
                                    <div className="metric-value">1,000</div>
                                    <div className="metric-note">a 0.10ml por spray</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-label">Ingreso potencial micro-spray</div>
                                    <div className="metric-value">S/ 1,000</div>
                                    <div className="metric-note">a S/ 1.00 por spray</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-label">Costo promedio por spray</div>
                                    <div className="metric-value">S/ 0.47</div>
                                    <div className="metric-note">promedio catálogo Falabella</div>
                                </div>
                                <div className="metric-card">
                                    <div className="metric-label">Margen micro-spray (S/ 1.00)</div>
                                    <div className="metric-value">53%+</div>
                                    <div className="metric-note">vs. venta botella cerrada</div>
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faTint} /> Modelo de micro-spray (liquidez inmediata)</div>
                                <div className="pb-card-body">
                                    El spray no se regala. Se vende como "Experiencia de Validación Sensorial". El cliente paga por sentir el aroma en su piel antes de tomar la decisión de compra de la botella. Esto convierte cada tester en una fuente de caja activa. Una botella de S/ 200 a 100ml equivale a 1,000 sprays. Si cada spray se cobra a S/ 1.00, el potencial total de esa botella abierta es S/ 1,000 — cinco veces el valor de venta del frasco cerrado. El arbitraje de inventario abierto es el corazón del modelo.
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faFlask} /> Estación de Decanting (laboratorio de fraccionamiento)</div>
                                <div className="pb-card-body">
                                    Instalar un área de 0.5 m² exclusiva para fraccionar botellas abiertas (testers o saldos) en viales pequeños. Conviertes inventario estático de baja rotación en flujo de caja de alta rotación. Los decants de 5ml a S/ 35.00 permiten al cliente experimentar el aroma completo (base, corazón, salida) sin comprometerse con S/ 400–800 de una botella completa. <span style={{ display: 'block', marginTop: '8px', fontWeight: 700, color: 'var(--color-corp-black)' }}>Margen decant 5ml → costo ~S/ 2.35 (si botella cuesta S/ 470/100ml) · precio venta S/ 35 · margen bruto {'>'}93%.</span>
                                </div>
                            </div>

                            <div className="highlight">
                                <strong>Embudo físico-digital:</strong> Papelito Codificado con Mica → aroma persiste 4h vs. 20min sin mica → ventana de decisión ampliada → QR en reverso → WhatsApp pre-cargado con código → conversión.
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faStore} /> B2B — Scent Marketing (espacios comerciales)</div>
                                <div className="pb-card-body">
                                    La perfumería no solo vende frascos. Vende la identidad olfativa de otros negocios. Hoteles boutique, clínicas estéticas y restaurantes en Tarma son clientes B2B naturales. Modelo: difusor profesional en consignación (costo cero para el cliente) + venta mensual de esencia concentrada. El local se convierte en punto de exhibición pasiva. <span style={{ display: 'block', marginTop: '8px' }}>Ticket B2B estimado: S/ 80–200/mes por local · margen ~70% · 5 locales = S/ 400–1,000/mes ingreso recurrente fijo.</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ====== TAB 2: PSICOLOGÍA ====== */}
                    {activeTab === 'psico' && (
                        <div className="tab-panel active">
                            <p className="section-intro">Cada elemento del sistema está diseñado para aprovechar sesgos cognitivos documentados. El objetivo es eliminar la "fricción de compra" y convertir la duda en acción sin que el cliente perciba que está siendo guiado.</p>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faArrowRightArrowLeft} /> Efecto Señuelo (Decoy Pricing)</div>
                                <div className="pb-card-body">
                                    El cerebro humano no evalúa el valor absoluto de un producto; evalúa el valor relativo frente a las opciones disponibles. Al presentar tres opciones asimétricas, el decant de 5ml se convierte en la elección "racional" de la mayoría.
                                </div>
                            </div>

                            <div className="two-col">
                                <div className="pb-card" style={{ marginBottom: 0 }}>
                                    <div className="pb-card-title" style={{ color: 'var(--color-text-gray)', fontSize: '14px', fontWeight: 600 }}>Opción A — Muestra</div>
                                    <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-corp-black)', margin: '6px 0 4px' }}>Gratis</div>
                                    <div style={{ fontSize: '13px', color: 'var(--color-text-gray)' }}>Papelito en papel. Función: activar curiosidad. Sin compromiso.</div>
                                </div>
                                <div className="pb-card" style={{ marginBottom: 0 }}>
                                    <div className="pb-card-title" style={{ color: 'var(--color-text-gray)', fontSize: '14px', fontWeight: 600 }}>Opción B — Micro-spray</div>
                                    <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--color-corp-black)', margin: '6px 0 4px' }}>S/ 2.00</div>
                                    <div style={{ fontSize: '13px', color: 'var(--color-text-gray)' }}>Spray en piel. Función: señuelo de precio que eleva la percepción del decant.</div>
                                </div>
                            </div>
                            <div className="highlight-info">
                                <strong>Opción C — Decant 5ml · S/ 35.00</strong><br />
                                La opción elegida por ~60–70% del segmento medio. Percibida como "lo mejor entre dos extremos". La Botella completa (S/ 400+) actúa como ancla de precio: hace que S/ 35 parezca accesible.
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faClock} /> Extensión de la ventana de decisión (Solución Mica)</div>
                                <div className="pb-card-body">
                                    El papelito sin mica expira en 20 minutos (evaporación del alcohol + oxidación). El cliente llega a casa y ya no recuerda el aroma con precisión. La mica es una inversión de {'<'}S/ 0.05 que extiende la vida del aroma a 4–6 horas, mantiene el aroma intacto en el bolsillo o cartera, y garantiza que el cliente viva el desarrollo completo del perfume: salida (0–30min), corazón (1–3h) y base (3–6h). Esa experiencia completa convierte. La salida sola, no.
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faRedo} /> Predictive CRM — Algoritmo de consumo</div>
                                <div className="pb-card-body">
                                    <div className="formula-box">
                                        <span>Consumo diario:</span> 4 sprays/día × 0.10ml = 0.4ml/día<br />
                                        <span>Botella 30ml:</span> 30 ÷ 0.4 = 75 días (2.5 meses)<br />
                                        <span>Botella 100ml:</span> 100 ÷ 0.4 = 250 días (8.3 meses)<br />
                                        <span>Disparo WA (30ml):</span> Día 65 → "Tu aroma está al 15%..."<br />
                                        <span>Disparo WA (100ml):</span> Día 230 → "Tu reserva está lista..."
                                    </div>
                                    Esto convierte el reabastecimiento en un evento predecible que el vendedor controla antes de que el cliente tenga la urgencia. Elimina la competencia de impulso: el cliente no compra porque vio otra fragancia en el mall, sino porque lo contactaron en el momento exacto de necesidad.
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faStar} /> Validación social — efecto MGM</div>
                                <div className="pb-card-body">
                                    Cuando una persona invita a su familia o amigos al grupo, el grupo de WhatsApp deja de ser "un grupo de ofertas" y se convierte en "un beneficio familiar compartido". El recomendador experimenta orgullo por conseguir sprays gratuitos para otros, el grupo percibe al negocio como generoso y exclusivo, y la perfumería obtiene leads calificados de personas en el mismo círculo social (mismo nivel socioeconómico, mismos gustos, misma capacidad de compra).
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faLock} /> Tokenización del cobro — eliminación de fricción de negociación</div>
                                <div className="pb-card-body">
                                    Cartel físico en el mostrador: <strong>"Prueba en papel: Gratis · Prueba en piel: S/ 2 · Vial 5ml: S/ 35"</strong>. Esto elimina la negociación, profesionaliza el proceso de cobro de micro-sprays, y ancla psicológicamente al cliente: nadie negocia cuando el precio está impreso.
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ====== TAB 3: SISTEMA MGM ====== */}
                    {activeTab === 'mgm' && (
                        <div className="tab-panel active">
                            <p className="section-intro">El Sistema de Referidos Sensorial (MGM - Member-Get-Member) convierte el papelito de prueba en una herramienta de crecimiento viral físico. Cada cliente que recibe un ticket se convierte en un agente de adquisición no remunerado.</p>

                            <div className="section-title" style={{ marginBottom: '16px' }}>Estructura de incentivos</div>

                            <div className="tier-row">
                                <div className="tier-icon"><FontAwesomeIcon icon={faUser} style={{ color: 'var(--color-text-gray)' }} /></div>
                                <div style={{ flex: 1 }}>
                                    <div className="tier-label">Nivel Registro (solo el titular)</div>
                                    <div className="tier-detail">Se une al grupo WA → activa el sistema</div>
                                </div>
                                <div className="tier-reward" style={{ color: 'var(--color-text-gray)' }}>1 spray validación</div>
                            </div>

                            <div className="tier-row" style={{ borderColor: 'var(--color-accent-soft)' }}>
                                <div className="tier-icon"><FontAwesomeIcon icon={faUsers} style={{ color: 'var(--color-accent-main)' }} /></div>
                                <div style={{ flex: 1 }}>
                                    <div className="tier-label">Nivel Plata — 1+1 <span className="badge badge-info">Recomendado</span></div>
                                    <div className="tier-detail">Titular + 1 referido ambos en el grupo</div>
                                    <div className="progress-bar-wrap"><div className="progress-bar-fill" style={{ width: '50%' }}></div></div>
                                </div>
                                <div className="tier-reward" style={{ color: 'var(--color-accent-main)' }}>2 sprays gratis</div>
                            </div>

                            <div className="tier-row" style={{ borderColor: '#E6F4EA' }}>
                                <div className="tier-icon"><FontAwesomeIcon icon={faUsersRectangle} style={{ color: '#137333' }} /></div>
                                <div style={{ flex: 1 }}>
                                    <div className="tier-label">Nivel Oro — 1+2 <span className="badge badge-success">Máximo valor</span></div>
                                    <div className="tier-detail">Titular + 2 referidos los tres en el grupo</div>
                                    <div className="progress-bar-wrap"><div className="progress-bar-fill" style={{ width: '100%', background: '#137333' }}></div></div>
                                </div>
                                <div className="tier-reward" style={{ color: '#137333' }}>3 sprays gratis</div>
                            </div>

                            <hr className="divider" />

                            <div className="section-title" style={{ marginBottom: '16px' }}>Diseño del ticket — reverso dinámico</div>

                            <div className="pb-card">
                                <div className="pb-card-title">Arquitectura visual del reverso</div>
                                <div className="pb-card-body">
                                    <ol style={{ paddingLeft: '18px', lineHeight: 2 }}>
                                        <li><strong>QR central dominante</strong> — texto: "Únete al Club VIP aquí". Debe ser el 40% del área del reverso.</li>
                                        <li><strong>Grid de casilleros</strong> — campo manuscrito: Mi celular: [___] · Invitado 1: [___] · Invitado 2: [___]</li>
                                        <li><strong>Barra de progreso visual</strong> — línea que conecta los 3 casilleros con íconos de spray (1 icono por nivel completado).</li>
                                        <li><strong>Condición visible</strong> — texto pequeño: "Ambos deben estar en el grupo para canjear".</li>
                                    </ol>
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faShieldHeart} /> Protocolo de verificación anti-fraude (flujo de 15 segundos)</div>
                                <div className="pb-card-body">
                                    <ul className="step-list">
                                        <li className="step-item"><div className="step-num">1</div><div className="step-content"><div className="step-title">Recepción del ticket</div><div className="step-desc">El cajero verifica que los campos de celular estén completos y la escritura sea legible.</div></div></li>
                                        <li className="step-item"><div className="step-num">2</div><div className="step-content"><div className="step-title">Verificación Flash en WhatsApp</div><div className="step-desc">Abrir el buscador del grupo. Escribir los últimos 4 dígitos de cada número anotado. Si aparecen como miembros, válido.</div></div></li>
                                        <li className="step-item"><div className="step-num">3</div><div className="step-content"><div className="step-title">Aplicación de sprays</div><div className="step-desc">Proceder al spray directamente en muñeca del cliente. Nunca en el papel (contamina la mica).</div></div></li>
                                        <li className="step-item"><div className="step-num">4</div><div className="step-content"><div className="step-title">Marcado del ticket</div><div class="step-desc">Perforar con perforadora de papel o tachar con marcador permanente. Impide reutilización.</div></div></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="highlight">
                                <strong>Pitch para el dueño:</strong> "Su papelito de perfume ahora es un vendedor que trabaja gratis. Cada vez que usted entrega uno, ese cliente se encarga de traerle a dos personas más a su base de datos de WhatsApp para ganarse un spray. Usted no gasta en publicidad. Usted premia la recomendación real."
                            </div>
                        </div>
                    )}

                    {/* ====== TAB 4: FINANZAS ====== */}
                    {activeTab === 'finanzas' && (
                        <div className="tab-panel active">
                            <p className="section-intro">Análisis financiero completo por línea de negocio. Todos los valores son conservadores y calculados sobre el catálogo de referencia Falabella.</p>

                            <div className="section-title" style={{ marginBottom: '16px' }}>Costo de adquisición de cliente (CAC)</div>

                            <table className="data-table">
                                <thead><tr><th>Canal</th><th>CAC estimado</th><th>Calidad del lead</th><th>Escalabilidad</th></tr></thead>
                                <tbody>
                                    <tr><td>Facebook Ads (Tarma)</td><td>S/ 15–40</td><td><span className="badge badge-warning">Media</span></td><td><span className="badge badge-success">Alta</span></td></tr>
                                    <tr><td>Volantes físicos</td><td>S/ 8–20</td><td><span className="badge badge-warning">Baja</span></td><td><span className="badge badge-warning">Media</span></td></tr>
                                    <tr><td>Sistema MGM (papelito)</td><td>{'<'} S/ 0.20</td><td><span className="badge badge-success">Muy alta</span></td><td><span className="badge badge-info">Orgánica</span></td></tr>
                                    <tr><td>Micro-spray (walk-in)</td><td>S/ 0.47 (1 spray)</td><td><span className="badge badge-success">Alta</span></td><td><span className="badge badge-success">Alta</span></td></tr>
                                </tbody>
                            </table>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}>Proyección conservadora de ingresos mensuales</div>

                            <table className="data-table">
                                <thead><tr><th>Línea de negocio</th><th>Volumen est./mes</th><th>Ticket unitario</th><th>Ingreso bruto</th><th>Margen est.</th></tr></thead>
                                <tbody>
                                    <tr><td>Micro-sprays (S/ 1)</td><td>200 sprays</td><td>S/ 1.00</td><td>S/ 200</td><td>~53%</td></tr>
                                    <tr><td>Micro-sprays (S/ 2)</td><td>100 sprays</td><td>S/ 2.00</td><td>S/ 200</td><td>~77%</td></tr>
                                    <tr><td>Decants 5ml</td><td>30 unidades</td><td>S/ 35.00</td><td>S/ 1,050</td><td>~93%</td></tr>
                                    <tr><td>Botellas completas</td><td>10 unidades</td><td>S/ 350 prom.</td><td>S/ 3,500</td><td>~30–40%</td></tr>
                                    <tr><td>B2B scent marketing</td><td>3 locales</td><td>S/ 120/mes</td><td>S/ 360</td><td>~70%</td></tr>
                                    <tr style={{ fontWeight: 800, background: 'var(--color-badge-gray)' }}><td>Total estimado</td><td>—</td><td>—</td><td>S/ 5,310</td><td>—</td></tr>
                                </tbody>
                            </table>

                            <div className="highlight-info" style={{ marginTop: '16px' }}>
                                <strong>ROI del Sistema MGM:</strong> Costo del incentivo (3 sprays) ≈ S/ 0.15 en insumo · Valor del lead adquirido (potencial compra S/ 35–400) · ROI potencial: 233x – 2,666x por lead generado.
                            </div>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}>Análisis por SKU — catálogo Falabella</div>

                            <table className="data-table">
                                <thead><tr><th>Perfume</th><th>ml</th><th>Costo/spray</th><th>Precio spray x S/1</th><th>Margen spray</th></tr></thead>
                                <tbody>
                                    <tr><td>Guess Amore Roma EDT</td><td>100</td><td>S/ 0.17</td><td>S/ 1.00</td><td><span className="badge badge-success">83%</span></td></tr>
                                    <tr><td>Armaf Club De Nuit</td><td>100</td><td>S/ 0.22</td><td>S/ 1.00</td><td><span className="badge badge-success">78%</span></td></tr>
                                    <tr><td>Tommy Hilfiger Men</td><td>200</td><td>S/ 0.20</td><td>S/ 1.00</td><td><span className="badge badge-success">80%</span></td></tr>
                                    <tr><td>Lancôme La Vie Est Belle</td><td>30</td><td>S/ 1.03</td><td>S/ 1.00</td><td><span className="badge badge-danger">Pérdida</span></td></tr>
                                    <tr><td>Carolina Herrera 212</td><td>30</td><td>S/ 0.86</td><td>S/ 1.00</td><td><span className="badge badge-warning">14%</span></td></tr>
                                </tbody>
                            </table>
                            <div style={{ fontSize: '13px', color: 'var(--color-text-gray)', marginBottom: '24px', fontWeight: 500 }}>Para perfumes premium de 30ml (Lancôme, CH), cobrar S/ 2.00 por spray para mantener margen positivo.</div>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}>Modelo Financiero Interactivo (Excel)</div>
                            <div className="pb-card" style={{ padding: 0, overflow: 'hidden', height: '450px', marginBottom: '8px' }}>
                                <iframe
                                    src="https://docs.google.com/spreadsheets/d/1c-HnC1Fbs5qYvgDn9bEcGHqoXfKiWNkeCdX5xddpwtA/edit?usp=sharing"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Modelo Financiero Excel en Google Drive"
                                    style={{ display: 'block', background: '#f8f9fa' }}
                                ></iframe>
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--color-text-gray)', marginBottom: '24px', fontWeight: 500 }}>
                                <strong>Nota para ti:</strong> Para que tu Excel se vea aquí, ve a tu Google Drive {'>'} Abre el Excel {'>'} Archivo {'>'} Compartir {'>'} "Publicar en la web" {'>'} Ve a la pestaña "Incorporar" {'>'} Copia el enlace (la parte que dice src="...") y pégalo en el código fuente de este iframe.
                            </div>
                        </div>
                    )}

                    {/* ====== TAB 5: LEGAL ====== */}
                    {activeTab === 'legal' && (
                        <div className="tab-panel active">
                            <p className="section-intro">Marco legal aplicable en Perú para la operación de perfumerías con modelo de micro-ventas, sistema de referidos y aromatización comercial B2B.</p>

                            <div className="highlight-danger">
                                <strong>Aviso importante:</strong> Este análisis es orientativo. Para decisiones legales definitivas (contratos, constitución de empresa, tributación), consultar siempre con un abogado o contador colegiado.
                            </div>

                            <div className="section-title" style={{ marginBottom: '16px' }}>Estructura societaria recomendada</div>

                            <div className="pb-card">
                                <div className="pb-card-title">Régimen tributario — MYPE Perú</div>
                                <div className="pb-card-body">
                                    Para una perfumería en Tarma con ingresos {'<'}S/ 96,000/año → <strong>Régimen MYPE Tributario (RMT)</strong>. Permite llevar contabilidad simplificada, tasa del Impuesto a la Renta: 10% sobre utilidades netas (primeras 15 UIT) y 29.5% sobre el exceso. IGV: 18% sobre ventas si supera S/ 96,000/año en ventas gravadas. Por debajo de ese umbral → Nuevo RUS (cuota fija mensual S/ 20–50 según categoría). El micro-spray al ser una prestación de servicio también está afecto a IGV si se supera el umbral. Emitir boleta electrónica por cada venta, incluso micro-transacciones, para acreditación fiscal.
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faShieldAlt} /> Sistema de referidos — aspectos legales</div>
                                <div className="pb-card-body">
                                    El sistema MGM (referidos por sprays gratuitos) no requiere formalización especial siempre que: los sprays gratuitos sean tratados como descuentos comerciales (no como pago de servicios), no se soliciten datos sensibles más allá de número de celular, se cumpla con la Ley N° 29733 de Protección de Datos Personales — el número de celular es dato personal. Recomendación: incluir en el ticket una leyenda mínima: "Al completar este formulario, autorizas el uso de tu número para contacto comercial de [Nombre Perfumería]."
                                </div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title"><FontAwesomeIcon icon={faStore} /> B2B Scent Marketing — contrato de consignación</div>
                                <div className="pb-card-body">
                                    El modelo de difusor en consignación + venta mensual de esencia requiere un contrato simple de consignación que incluya: descripción del equipo entregado (difusor, modelo, serie), responsabilidad por daños o pérdida del equipo, precio fijo mensual de la esencia y condiciones de reposición, plazo mínimo del acuerdo (recomendado: 3 meses), cláusula de exclusividad (el local no puede usar esencias de otra perfumería durante el contrato). Sin este contrato, el local puede devolver el difusor sin previo aviso y no existe obligación de pago.
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ====== TAB 6: OPERACIÓN ====== */}
                    {activeTab === 'operacion' && (
                        <div className="tab-panel active">
                            <p className="section-intro">Flujo operativo completo desde la apertura del local hasta el cierre diario. Diseñado para ser ejecutado por 1–2 personas sin formación técnica avanzada.</p>

                            <div className="section-title" style={{ marginBottom: '16px' }}><FontAwesomeIcon icon={faSun} style={{ color: 'var(--color-accent-main)' }} /> Protocolo de apertura (30 minutos)</div>

                            <ul className="step-list">
                                <li className="step-item"><div className="step-num">1</div><div className="step-content"><div className="step-title">Preparación de la Estación de Experiencia</div><div className="step-desc">Colocar 3 testers del día en el mostrador con papelitos con mica ya cortados (mínimo 20 unidades). Revisar que los QR del reverso funcionen escaneándolos con el celular.</div></div></li>
                                <li className="step-item"><div className="step-num">2</div><div className="step-content"><div className="step-title">Activar cartel de precios</div><div className="step-desc">"Prueba en papel: Gratis · Prueba en piel: S/ 2 · Vial 5ml: S/ 35". Verificar que esté visible desde la entrada.</div></div></li>
                                <li className="step-item"><div className="step-num">3</div><div className="step-content"><div className="step-title">Revisar grupo de WhatsApp</div><div className="step-desc">Responder mensajes pendientes. Verificar que el link de invitación del QR siga activo. Si no, regenerar y actualizar los papelitos.</div></div></li>
                                <li className="step-item"><div className="step-num">4</div><div className="step-content"><div className="step-title">Revisar agenda de predictive CRM</div><div className="step-desc">¿Algún cliente llega al día 65 o 230 hoy? Preparar mensaje personalizado para enviar entre 10–11am.</div></div></li>
                                <li className="step-item"><div className="step-num">5</div><div className="step-content"><div className="step-title">Verificar stock de decants</div><div className="step-desc">Si hay menos de 5 viales de 5ml listos, preparar nuevos desde testers antes de abrir al público.</div></div></li>
                            </ul>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}><FontAwesomeIcon icon={faUserCheck} style={{ color: 'var(--color-accent-main)' }} /> Protocolo de atención (el "Script de 3 Pasos")</div>

                            <div className="pb-card">
                                <div className="pb-card-title">Paso 1 — Activación sensorial (primeros 30 segundos)</div>
                                <div className="pb-card-body">El vendedor no pregunta "¿en qué le ayudo?". Entrega directamente un papelito con mica: "Acaba de llegar algo que le puede interesar. Huélalo." La fragancia inicia la experiencia antes de que el cliente tome una decisión consciente. El sentido del olfato activa respuestas emocionales directas en el sistema límbico, bypaseando la resistencia racional.</div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title">Paso 2 — Presentación del menú de decisión</div>
                                <div className="pb-card-body">Si el cliente muestra interés (pregunta por el precio, vuelve a oler el papelito, pregunta el nombre): señalar el cartel de precios. "Si quiere sentirlo en su piel antes de decidir, le doy un spray directo por S/ 2. O si ya le gustó, tenemos el vial de 5ml que le dura el viaje o una semana de uso, a S/ 35." No presionar. Dejar que el efecto señuelo opere solo.</div>
                            </div>

                            <div className="pb-card">
                                <div className="pb-card-title">Paso 3 — Activación del MGM antes del cierre</div>
                                <div className="pb-card-body">Al momento del pago (cualquier transacción): "Le doy también este ticket. Si lo comparte con un familiar o amigo y ambos se unen al grupo de WhatsApp del Club VIP, en su próxima visita le regalamos dos sprays en piel, gratis." Entregar el ticket. No explicar más. La simplicidad es clave.</div>
                            </div>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}><FontAwesomeIcon icon={faMoon} style={{ color: 'var(--color-corp-black)' }} /> Protocolo de cierre diario (15 minutos)</div>

                            <ul className="step-list">
                                <li className="step-item"><div className="step-num">1</div><div className="step-content"><div className="step-title">Registro de métricas del día</div><div className="step-desc">Anotar en hoja simple: N° de peatones que entraron / N° de micro-sprays vendidos / N° de decants vendidos / N° de tickets MGM entregados / N° de miembros nuevos en el grupo WA.</div></div></li>
                                <li className="step-item"><div className="step-num">2</div><div className="step-content"><div className="step-title">Actualizar CRM predictivo</div><div className="step-desc">Para cada venta de botella completa, anotar la fecha + tamaño + nombre del cliente en la hoja de seguimiento. Calcular fecha de disparo WA (día 65 o 230 según tamaño).</div></div></li>
                            </ul>
                        </div>
                    )}

                    {/* ====== TAB 7: AUDITORÍA ====== */}
                    {activeTab === 'auditoria' && (
                        <div className="tab-panel active">
                            <p className="section-intro">El "Kenyo Scan" es el protocolo de diagnóstico gratuito que ofreces al dueño de la perfumería. Sirve para identificar palancas de ingresos no explotadas y construir confianza antes de proponer una consultoría paga.</p>

                            <div className="section-title" style={{ marginBottom: '16px' }}><FontAwesomeIcon icon={faClipboardList} /> Los 3 datos clave que solicitar</div>

                            <ul className="step-list">
                                <li className="step-item"><div className="step-num">1</div><div className="step-content"><div className="step-title">Ticket promedio actual</div><div className="step-desc">Para calcular el potencial de upselling. Si el ticket promedio es S/ 50, hay margen para llevarlo a S/ 80–120 con el modelo decant + micro-spray. Si ya es S/ 300+, el foco está en frecuencia de compra (CRM predictivo).</div></div></li>
                                <li className="step-item"><div className="step-num">2</div><div className="step-content"><div className="step-title">Tasa de conversión de peatones</div><div className="step-desc">¿Cuántas personas pasan frente al local vs. cuántas entran? En Tarma, si el ratio es {'<'}10%, el Sampling Codificado con papelito hacia afuera del local puede triplicarlo. Si ya entra el 30%+, el problema está en la conversión interna (aplicar decoy pricing y script de 3 pasos).</div></div></li>
                                <li className="step-item"><div className="step-num">3</div><div className="step-content"><div className="step-title">Ventas por categoría (últimos 30 días)</div><div className="step-desc">Identificar los "muertos de estantería": perfumes que no se han vendido en {'>'}30 días. Estos son los candidatos perfectos para convertir en decants (recuperar el capital inmovilizado) y para la Estación de Decanting.</div></div></li>
                            </ul>

                            <div className="section-title" style={{ marginBottom: '16px', marginTop: '30px' }}><FontAwesomeIcon icon={faBullseye} style={{ color: 'var(--color-accent-main)' }} /> KPIs de seguimiento mensual</div>

                            <table className="data-table">
                                <thead><tr><th>Métrica</th><th>Cómo medirla</th><th>Objetivo mes 1</th><th>Objetivo mes 3</th></tr></thead>
                                <tbody>
                                    <tr><td>Miembros grupo WA</td><td>Info del grupo WA</td><td>50 miembros</td><td>200 miembros</td></tr>
                                    <tr><td>Tasa conversión peatón</td><td>Conteo manual 2h/día</td><td>+5% vs. línea base</td><td>+15% vs. línea base</td></tr>
                                    <tr><td>Ticket promedio</td><td>Suma ventas ÷ N° transacciones</td><td>+20% vs. línea base</td><td>+40% vs. línea base</td></tr>
                                    <tr><td>Ingresos micro-spray/mes</td><td>Caja diaria etiquetada</td><td>S/ 200</td><td>S/ 600</td></tr>
                                    <tr><td>Decants vendidos/mes</td><td>Inventario de viales</td><td>15 unidades</td><td>40 unidades</td></tr>
                                    <tr><td>CAC (costo por lead WA)</td><td>Gasto incentivos ÷ nuevos miembros</td><td>{'<'} S/ 1.00</td><td>{'<'} S/ 0.30</td></tr>
                                </tbody>
                            </table>

                            <div className="highlight">
                                <strong>Retention Lift:</strong> Medir cuántas personas conservan el papelito con mica vs. sin mica después de 30 minutos. Test A/B: entregar una semana con mica y una semana sin mica. Comparar el % de personas que regresan mencionando el papelito. Este dato justifica el costo de la mica ante el dueño con evidencia propia.
                            </div>

                            <button className="cta-btn" onClick={() => alert("Simulando acción: Abriendo generador de scripts AI...")}>
                                Generar script de diagnóstico para el dueño <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '4px' }} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PerfumePlaybookModal;

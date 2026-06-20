import React, { useState } from 'react';
import './VenturePipeline.css';
import PerfumePlaybookModal from './PerfumePlaybookModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMicrochip, faChartLine, faCube,
    faBullseye, faCircleCheck, faHandshake,
    faFileLines, faCalendarDays, faLock,
    faCreditCard, faMobileScreen, faSitemap,
    faUsers, faFileInvoiceDollar, faMagnifyingGlassChart
} from '@fortawesome/free-solid-svg-icons';

// Datos dinámicos extraídos de tus documentos reales (Excel y Playbooks)
const startupsData = [
    {
        id: '01',
        name: 'GiftCards Core API',
        category: 'Tecnología / FinTech',
        badges: [
            { text: 'Tech Model', type: 'primary' },
            { text: 'Motor JIT Validado', type: 'secondary' }
        ],
        icon: faCreditCard,
        model: 'Motor transaccional B2B/B2C (Just-in-Time) sin riesgo de inventario, basado en captura de spreads netos.',
        thesis: [
            'Flujo asíncrono: Recaudo B2C a 15 días, pago B2B a 30 días.',
            'Unit Economics escalables (LTV/CAC > 3x calculado).',
            'Propiedad Intelectual: Modelo Financiero JIT Protegido.'
        ]
    },
    {
        id: '02',
        name: 'ScentFlow Automation',
        category: 'Tecnología / O2O',
        badges: [
            { text: 'Tech Model', type: 'primary' },
            { text: 'Fase Beta', type: 'secondary' }
        ],
        icon: faMobileScreen,
        model: 'Agentes y flujos automatizados para validación de clientes en tienda física usando bases de WhatsApp en tiempo real.',
        thesis: [
            'Conexión O2O (Online-to-Offline) sin fricción en punto de venta.',
            'Verificación flash con últimos 4 dígitos y validación cruzada.',
            'Mantenimiento y depuración de base de datos automatizada.'
        ]
    },
    {
        id: '03',
        name: 'Cash Flow Architecture',
        category: 'Estrategia de Ingresos',
        badges: [
            { text: 'Playbook Estratégico', type: 'primary' },
            { text: 'Arbitraje de Inventario', type: 'secondary' }
        ],
        icon: faSitemap,
        model: 'Transformación de ventas de ticket alto en micro-transacciones de alta liquidez (Ej. Modelo Micro-Spray en perfumerías).',
        thesis: [
            'Generación de liquidez inmediata (Efectivo cada hora).',
            'Arbitraje físico: 1 activo (S/300) = 1,000 micro-ventas (S/1,000).',
            'Reconfiguración del modelo de negocio tradicional B2C.'
        ]
    },
    {
        id: '04',
        name: 'Sensorial MGM System',
        category: 'Growth Hacking Físico',
        badges: [
            { text: 'Playbook Estratégico', type: 'primary' },
            { text: 'Viralidad Controlada', type: 'secondary' }
        ],
        icon: faUsers,
        model: 'Conversión de objetos pasivos (sampling/tickets) en activadores de recomendación (Member-get-Member) sin costo publicitario.',
        thesis: [
            'Costo de Adquisición (CAC) marginal cercano a S/ 0.20 por lead.',
            'Estructura de incentivos escalonada por referidos (1+1, 1+2).',
            'Sustitución de inversión en Ads por retornos tangibles en tienda.'
        ]
    },
    {
        id: '05',
        name: 'Anticipación Familiar',
        category: 'Inteligencia CRM',
        badges: [
            { text: 'Playbook Estratégico', type: 'primary' },
            { text: 'Cero Spam', type: 'secondary' }
        ],
        icon: faFileInvoiceDollar,
        model: 'Captura de fechas clave mediante regalos delegados, creando una base de datos predictiva y 100% activa.',
        thesis: [
            'Viralidad consentida: Psicología de "regalo enviado por un familiar".',
            'Filtro antifraude físico en caja (Validación por DNI).',
            'Calendario predictivo de ingresos basado en estacionalidad.'
        ]
    },
    {
        id: '06',
        name: 'Corporate Modeling',
        category: 'Análisis Financiero BAU',
        badges: [
            { text: 'Playbook Estratégico', type: 'primary' },
            { text: 'Data Cuantitativa', type: 'secondary' }
        ],
        icon: faMagnifyingGlassChart,
        model: 'Proyección algorítmica de flujos de caja, balances generales y Unit Economics para validación pre-lanzamiento.',
        thesis: [
            'Cálculo riguroso de Churn, LTV, Break-even y Runway.',
            'Estructuración de requerimientos de capital (CAPEX/OPEX).',
            'Toma de decisiones basada estrictamente en viabilidad financiera.'
        ]
    }
];

const VenturePipeline = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="venture">

            {/* Elementos Decorativos */}
            <div className="venture__decoration venture__decoration--top-right"></div>
            <div className="venture__decoration venture__decoration--bottom-left"></div>
            <div className="venture__orbit venture__orbit--1"></div>
            <div className="venture__orbit venture__orbit--2"></div>

            {/* ENCABEZADO */}
            <header className="venture__header">
                <h2 className="venture__title">
                    <span className="venture__title--orange">Portafolio Híbrido:</span><br />
                    <span className="venture__title--dark">Tecnología & Arquitectura de Negocios</span>
                </h2>
                <div className="venture__title-divider"></div>
                <p className="venture__subtitle">
                    No construyo solo software, construyo sistemas rentables. Combino <strong>implementación tecnológica pura</strong> con <strong>diseño de arquitecturas financieras e ingeniería de ingresos</strong>.
                </p>

                {/* PANEL KPI SUPERIOR */}
                <div className="venture__kpi-panel">
                    <div className="venture__kpi-item">
                        <FontAwesomeIcon icon={faMicrochip} className="venture__kpi-icon" />
                        <div className="venture__kpi-content">
                            <span className="venture__kpi-number">2</span>
                            <span className="venture__kpi-label">Desarrollos Tech</span>
                        </div>
                    </div>
                    <div className="venture__kpi-divider"></div>
                    <div className="venture__kpi-item">
                        <FontAwesomeIcon icon={faSitemap} className="venture__kpi-icon" />
                        <div className="venture__kpi-content">
                            <span className="venture__kpi-number">4</span>
                            <span className="venture__kpi-label">Playbooks Estratégicos</span>
                        </div>
                    </div>
                    <div className="venture__kpi-divider"></div>
                    <div className="venture__kpi-item">
                        <FontAwesomeIcon icon={faChartLine} className="venture__kpi-icon" />
                        <div className="venture__kpi-content">
                            <span className="venture__kpi-number">100%</span>
                            <span className="venture__kpi-label">Enfoque a Rentabilidad</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* GRID DE LAS 6 TARJETAS */}
            <div className="venture__grid">
                {startupsData.map((startup) => (
                    <article 
                        className="startup-card" 
                        key={startup.id}
                        onClick={() => {
                            if (startup.id === '03') setIsModalOpen(true);
                        }}
                        style={{ cursor: startup.id === '03' ? 'pointer' : 'default' }}
                    >

                        {/* Header de Tarjeta */}
                        <div className="startup-card__top">
                            <div className="startup-card__header">
                                <span className="startup-card__number">{startup.id}</span>
                                <div className="startup-card__identity">
                                    <h3 className="startup-card__name">{startup.name}</h3>
                                    <span className="startup-card__category">{startup.category}</span>
                                </div>
                            </div>
                            <div className="startup-card__badges">
                                {startup.badges.map((badge, index) => (
                                    <span key={index} className={`startup-card__badge startup-card__badge--${badge.type}`}>
                                        {badge.text}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Caja de Protección de Información (Dinámica según el tipo de proyecto) */}
                        <div className="startup-card__visual startup-card__visual--protected">
                            <div className="startup-card__protected-content">
                                {startup.id === '01' || startup.id === '02' ? (
                                    <>
                                        <FontAwesomeIcon icon={faLock} className="startup-card__protected-lock" />
                                        <span className="startup-card__protected-text">Código y APIs Protegidos (Confidencial)</span>
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={startup.icon} className="startup-card__protected-icon" />
                                        <span className="startup-card__protected-text">Playbook Estratégico Interno (PI)</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Sección Modelo y Tesis */}
                        <div className="startup-card__bottom">
                            <div className="startup-card__model">
                                <FontAwesomeIcon icon={faCube} className="startup-card__section-icon" />
                                <div className="startup-card__model-content">
                                    <h4 className="startup-card__section-title">El Sistema / Solución</h4>
                                    <p className="startup-card__model-desc">{startup.model}</p>
                                </div>
                            </div>

                            <div className="startup-card__thesis">
                                <h4 className="startup-card__thesis-title">
                                    <FontAwesomeIcon icon={faBullseye} className="startup-card__thesis-icon" />
                                    Tesis de Captura de Valor
                                </h4>
                                <ul className="startup-card__thesis-list">
                                    {startup.thesis.map((point, index) => (
                                        <li key={index} className="startup-card__thesis-item">
                                            <FontAwesomeIcon icon={faCircleCheck} className="startup-card__bullet" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </article>
                ))}
            </div>

            {/* CTA INFERIOR PARA SOCIOS E INVERSORES */}
            <div className="venture__cta">
                <div className="venture__cta-left">
                    <FontAwesomeIcon icon={faHandshake} className="venture__cta-icon" />
                    <div className="venture__cta-text">
                        <h4>¿Buscando optimizar la rentabilidad de tu modelo de negocio?</h4>
                        <p>Los mapas de flujo, Excel financieros y lógicas operativas requieren un acuerdo de confidencialidad (NDA).</p>
                    </div>
                </div>
                <div className="venture__cta-right">
                    <button className="btn btn--secondary">
                        <FontAwesomeIcon icon={faCalendarDays} className="btn__icon" />
                        Agendar Sesión Estratégica
                    </button>
                    <button className="btn btn--primary">
                        <FontAwesomeIcon icon={faFileLines} className="btn__icon" />
                        Solicitar Acceso a Modelos
                    </button>
                </div>
            </div>

            {/* RENDERIZAR MODAL DE PLAYBOOK DE PERFUME */}
            {isModalOpen && <PerfumePlaybookModal onClose={() => setIsModalOpen(false)} />}

        </section>
    );
};

export default VenturePipeline;
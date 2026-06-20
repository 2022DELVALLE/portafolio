import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faBullseye, faCircleCheck,
    faLock,
    faSitemap,
    faUsers, faFileInvoiceDollar, faMagnifyingGlassChart
} from '@fortawesome/free-solid-svg-icons';
import './PerfumePlaybook.css';

const PerfumePlaybook = () => {
    const modulesData = [
        {
            id: 1,
            title: "Módulo I — Ingeniería de Flujo de Caja",
            icon: faFileInvoiceDollar,
            description: "Transformar activos pasivos del negocio en generadores permanentes de ingresos.",
            points: [
                "Motor de Liquidez: Micro-sprays monetizan la validación olfativa.",
                "Fraccionamiento Estratégico: Decants para alta velocidad comercial.",
                "Expansión B2B: Aromatización comercial para ingresos predecibles."
            ]
        },
        {
            id: 2,
            title: "Módulo II — Arquitectura Psicológica",
            icon: faBullseye,
            description: "Reducir la fricción cognitiva y construir escenarios de decisión favorables.",
            points: [
                "Decoy Pricing: Efecto señuelo hacia el punto económicamente óptimo.",
                "Ventana de Decisión: Extensión física de la persistencia aromática.",
                "CRM Predictivo: Algoritmo operativo para reposición de inventario."
            ]
        },
        {
            id: 3,
            title: "Módulo III — Sistema MGM",
            icon: faUsers,
            description: "Transformar un ticket de prueba en una herramienta de crecimiento viral.",
            points: [
                "Incentivos asimétricos: Bajo costo, alto valor percibido.",
                "Arquitectura del Ticket: Captura de datos, referidos y acceso VIP.",
                "Crecimiento acumulativo y escalabilidad orgánica."
            ]
        },
        {
            id: 4,
            title: "Módulo IV — Inteligencia Financiera",
            icon: faChartLine,
            description: "Decisiones fundamentadas en indicadores económicos observables.",
            points: [
                "Métricas clave: LTV, CAC, Retorno sobre incentivos.",
                "Principio Rector: El precio de experiencia se ajusta al margen del SKU.",
                "Protección de rentabilidad frente a subsidios ocultos."
            ]
        },
        {
            id: 5,
            title: "Módulo V — Blindaje Legal",
            icon: faLock,
            description: "Permitir el crecimiento sin generar riesgos regulatorios innecesarios.",
            points: [
                "Operación tributaria y fraccionamiento de productos.",
                "Protección de datos y consentimiento comercial.",
                "Contratos de consignación y comercialización B2B."
            ]
        },
        {
            id: 6,
            title: "Módulo VI — Sistema Operativo de Tienda",
            icon: faSitemap,
            description: "Toda la estrategia se traduce en procedimientos ejecutables.",
            points: [
                "Apertura: Preparación de activos comerciales.",
                "Atención & Captura: Script sensorial e integración MGM.",
                "Seguimiento & Cierre: CRM predictivo y métricas."
            ]
        },
        {
            id: 7,
            title: "Módulo VII — Framework Kenyo Scan",
            icon: faMagnifyingGlassChart,
            description: "Mecanismo de diagnóstico estratégico para detectar oportunidades ocultas.",
            points: [
                "Fase 1: Activación (Optimización y monetización inmediata).",
                "Fase 2: Crecimiento (Sistemas CRM y recomendación).",
                "Fase 3: Escalamiento (Ingresos B2B y expansión territorial)."
            ]
        }
    ];

    return (
        <section className="playbook">
            <div className="playbook__header">
                <h4 className="playbook__tag">Framework Estratégico desarrollado por Kenyo</h4>
                <h2 className="playbook__title">Arquitectura Integral de Monetización</h2>
                <h3 className="playbook__subtitle">Sistema de Optimización Comercial, Liquidez y Crecimiento Recurrente</h3>
                <p className="playbook__overview">
                    Este documento define una arquitectura completa orientada a maximizar ingresos, transformar inventario inmovilizado en flujo de caja y construir activos comerciales. <strong>Cada botella abierta, cada tester y cada contacto debe convertirse en un activo productivo.</strong>
                </p>
            </div>

            <div className="playbook__grid">
                {modulesData.map((module) => (
                    <div className="playbook-card" key={module.id}>
                        <div className="playbook-card__header">
                            <div className="playbook-card__icon-wrapper">
                                <FontAwesomeIcon icon={module.icon} className="playbook-card__icon" />
                            </div>
                            <h4 className="playbook-card__title">{module.title}</h4>
                        </div>
                        <p className="playbook-card__description">{module.description}</p>
                        <ul className="playbook-card__list">
                            {module.points.map((point, index) => (
                                <li key={index} className="playbook-card__list-item">
                                    <FontAwesomeIcon icon={faCircleCheck} className="playbook-card__check" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="playbook-thesis">
                <div className="playbook-thesis__content">
                    <h3 className="playbook-thesis__title">Tesis Central del Sistema</h3>
                    <p className="playbook-thesis__text">
                        La mayoría de perfumerías vende productos. <strong>Este modelo construye activos.</strong>
                    </p>
                    <div className="playbook-thesis__grid">
                        <div className="playbook-thesis__item">Una botella no es una botella. <br /><span>Es una fuente de flujo de caja.</span></div>
                        <div className="playbook-thesis__item">Un tester no es una muestra. <br /><span>Es una herramienta de adquisición.</span></div>
                        <div className="playbook-thesis__item">Un papelito no es publicidad. <br /><span>Es un vendedor distribuido.</span></div>
                        <div className="playbook-thesis__item">Un grupo de WhatsApp no es comunicación. <br /><span>Es infraestructura comercial.</span></div>
                    </div>
                    <p className="playbook-thesis__footer">
                        Cuando todos estos elementos trabajan coordinadamente, la perfumería deja de depender de vender frascos y opera como un sistema de generación de ingresos recurrentes, adquisición orgánica y monetización multicapa.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PerfumePlaybook;
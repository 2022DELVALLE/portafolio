import React, { useState } from 'react';
import './Certificates.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

/* ── Imágenes de los certificados ────────────────── */
import imgAntigravity from '../../assets/certificates/Curso Completo Google Antigravity. Crea Aplicaciones con IA.jpg';
import pdfAntigravity from '../../assets/certificates/Curso Completo Google Antigravity. Crea Aplicaciones con IA.pdf';

import imgN8nAgentes from '../../assets/certificates/Curso n8n. Crea Agentes de IA Sin Programar.jpg';
import pdfN8nAgentes from '../../assets/certificates/Curso n8n. Crea Agentes de IA Sin Programar.pdf';

import imgHackerMentor from '../../assets/certificates/HACKER MENTOR.png';
import pdfHackerMentor from '../../assets/certificates/HACKER MENTOR.pdf';

import imgVoiceAgents from '../../assets/certificates/Master AI Voice Agents Automate Calls with AI and No-Code.jpg';
import pdfVoiceAgents from '../../assets/certificates/Master AI Voice Agents Automate Calls with AI and No-Code.pdf';

import imgN8nSinCodigo from '../../assets/certificates/n8n Agentes y automatizaciones de IA (¡sin código!).jpg';
import pdfN8nSinCodigo from '../../assets/certificates/n8n Agentes y automatizaciones de IA (¡sin código!).pdf';

/* ── Colores de institución ──────────────────────── */
const ISSUER_META = {
    Udemy:        { color: '#A435F0', initials: 'U',  bg: '#f3e8ff' },
    Cisco:        { color: '#1BA0D7', initials: 'C',  bg: '#e0f4fd' },
    HackerMentor: { color: '#FF6600', initials: 'HM', bg: '#FFF0E5' },
};
const getIssuerMeta = (issuer) => {
    for (const key of Object.keys(ISSUER_META)) {
        if (issuer.includes(key)) return ISSUER_META[key];
    }
    return { color: '#555', initials: issuer.slice(0, 2).toUpperCase(), bg: '#F5F5F5' };
};

/* ── Datos reales ────────────────────────────────── */
const certificates = [
    /* ── AUTOMATIZACIÓN (prioridad) ── */
    {
        id: 5,
        title: 'n8n: Agentes y automatizaciones de IA (¡sin código!)',
        issuer: 'Udemy',
        date: 'Mar. 2026',
        category: 'Automatización',
        description: 'Automatización de procesos con n8n, creación de agentes de IA, integraciones entre APIs y desarrollo de flujos de trabajo no-code para automatización avanzada.',
        credentialId: 'UC-72fc6987-67be-4e30-aa13-be552225deca',
        url: 'https://www.udemy.com/certificate/UC-72fc6987-67be-4e30-aa13-be552225deca/',
        image: imgN8nSinCodigo,
        pdf: pdfN8nSinCodigo,
        featured: true,
    },
    {
        id: 6,
        title: 'Master AI Voice Agents: Automate Calls with AI and No-Code',
        issuer: 'Udemy',
        date: 'Jun. 2025',
        category: 'Automatización',
        description: 'Agentes de voz con IA, automatización de llamadas, integración de herramientas no-code y creación de sistemas conversacionales automatizados.',
        credentialId: 'UC-51b8a1b8-69c1-4a82-a554-1407029b6fbd',
        url: 'https://www.udemy.com/certificate/UC-51b8a1b8-69c1-4a82-a554-1407029b6fbd/',
        image: imgVoiceAgents,
        pdf: pdfVoiceAgents,
        featured: true,
    },
    {
        id: 7,
        title: 'Curso n8n. Crea Agentes de IA Sin Programar',
        issuer: 'Udemy',
        date: 'May. 2025',
        category: 'Automatización',
        description: 'Creación de agentes de IA sin programar usando n8n. Automatización de flujos de trabajo, conexión de servicios y desarrollo de bots inteligentes no-code.',
        credentialId: 'UC-6d067745-e0b2-4903-93d9-0efc2daba703',
        url: 'https://www.udemy.com/certificate/UC-6d067745-e0b2-4903-93d9-0efc2daba703/',
        image: imgN8nAgentes,
        pdf: pdfN8nAgentes,
        featured: true,
    },
    /* ── IA ── */
    {
        id: 1,
        title: 'Curso Completo Google Antigravity. Crea Aplicaciones con IA',
        issuer: 'Udemy',
        date: 'May. 2026',
        category: 'IA',
        description: 'Formación completa en Google Antigravity para crear aplicaciones con Inteligencia Artificial. Desarrollo de agentes, automatizaciones y aplicaciones potenciadas por IA.',
        credentialId: 'UC-52aa9856-e7bd-42b8-a6b8-a45d5593c5ee',
        url: 'https://www.udemy.com/certificate/UC-52aa9856-e7bd-42b8-a6b8-a45d5593c5ee/',
        image: imgAntigravity,
        pdf: pdfAntigravity,
        featured: false,
    },
    {
        id: 2,
        title: 'Introduction to Modern AI',
        issuer: 'Cisco',
        date: 'Abr. 2026',
        category: 'IA',
        description: 'Introducción a los conceptos modernos de Inteligencia Artificial, machine learning, deep learning y aplicaciones prácticas de IA en la industria.',
        credentialId: '1dd7d94f-3841-43cf-8649-5e6be0f83bae',
        url: '#',
        image: null,
        pdf: null,
        featured: false,
    },
    {
        id: 3,
        title: 'AI Fundamentals with IBM SkillsBuild',
        issuer: 'Cisco',
        date: 'Abr. 2026',
        category: 'IA',
        description: 'Fundamentos de Inteligencia Artificial con IBM SkillsBuild. Conceptos core de IA, ética en IA, y aplicaciones empresariales de tecnologías inteligentes.',
        credentialId: '1c4bb910-e409-403e-ae87-67c8fc22a41a',
        url: '#',
        image: null,
        pdf: null,
        featured: false,
    },
    /* ── SEGURIDAD ── */
    {
        id: 4,
        title: 'Ciberseguridad y Ethical Hacking',
        issuer: 'HackerMentor',
        date: 'Oct. 2025',
        category: 'Seguridad',
        description: 'Formación en fundamentos de ciberseguridad, hacking ético y prácticas de seguridad informática. 8 horas de desarrollo profesional certificado.',
        credentialId: '4a1e4a3c-cc12-479e-979c-452de563e39d',
        url: '#',
        image: imgHackerMentor,
        pdf: pdfHackerMentor,
        featured: false,
    },
];

const categories = ['Automatización', 'IA', 'Seguridad', 'Todos'];

/* ── Sub-componente: copia de ID ─────────────────── */
const CopyId = ({ id }) => {
    const [copied, setCopied] = useState(false);
    const handle = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(id).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button className="certificates__copy-btn" onClick={handle} title={copied ? '¡Copiado!' : 'Copiar ID'}>
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
    );
};

/* ── Sub-componente: logo de institución ─────────── */
const IssuerLogo = ({ issuer, size = 'md' }) => {
    const meta = getIssuerMeta(issuer);
    return (
        <div
            className={`certificates__issuer-logo certificates__issuer-logo--${size}`}
            style={{ background: meta.bg, color: meta.color }}
            aria-label={issuer}
        >
            {meta.initials}
        </div>
    );
};

/* ── Sub-componente: lightbox ────────────────────── */
const Lightbox = ({ cert, onClose }) => (
    <div className="certificates__lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Ver certificado: ${cert.title}`}>
        <div className="certificates__lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="certificates__lightbox-close" onClick={onClose} aria-label="Cerrar">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={cert.image} alt={cert.title} className="certificates__lightbox-img" />
            <div className="certificates__lightbox-footer">
                <span className="certificates__lightbox-title">{cert.title}</span>
                <div className="certificates__lightbox-actions">
                    {cert.pdf && (
                        <a href={cert.pdf} className="certificates__card-link certificates__card-link--pdf" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFilePdf} /> Descargar PDF
                        </a>
                    )}
                    {cert.url !== '#' && (
                        <a href={cert.url} className="certificates__card-link" target="_blank" rel="noopener noreferrer">
                            Ver credencial <FontAwesomeIcon icon={faExternalLinkAlt} className="certificates__card-link-icon" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

/* ── Componente principal ────────────────────────── */
const Certificates = () => {
    const [activeFilter, setActiveFilter] = useState('Automatización');
    const [lightboxCert, setLightboxCert] = useState(null);

    const filtered = activeFilter === 'Todos'
        ? certificates
        : certificates.filter(c => c.category === activeFilter);

    const featuredAuto = certificates.filter(c => c.featured);

    return (
        <section className="certificates" aria-label="Sección de Certificados">
            {lightboxCert && <Lightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />}

            <div className="certificates__decoration certificates__decoration--top-right" aria-hidden="true" />
            <div className="certificates__decoration certificates__decoration--bottom-left" aria-hidden="true" />

            <div className="certificates__container">

                {/* ── Header ── */}
                <header className="certificates__header">
                    <div className="certificates__header-badge">
                        <FontAwesomeIcon icon={faAward} />
                        <span>Licencias &amp; Certificaciones</span>
                    </div>
                    <h1 className="certificates__title">
                        Mis <span className="certificates__title--accent">Certificados</span>
                    </h1>
                    <p className="certificates__subtitle">
                        Aprendizaje continuo en Inteligencia Artificial, automatización y ciberseguridad.
                        Todas las credenciales son verificables con su ID oficial.
                    </p>
                </header>

                {/* ── Destacados (Automatización) ── */}
                <div className="certificates__featured">
                    <h2 className="certificates__section-label">
                        <span className="certificates__section-label-line" />
                        Automatización — Destacados
                        <span className="certificates__section-label-line" />
                    </h2>
                    <div className="certificates__featured-grid">
                        {featuredAuto.map(cert => {
                            const meta = getIssuerMeta(cert.issuer);
                            return (
                                <article
                                    key={cert.id}
                                    className="certificates__featured-card"
                                    style={{ '--accent-color': meta.color, '--accent-soft': meta.bg }}
                                >
                                    {/* Thumbnail del certificado */}
                                    {cert.image && (
                                        <button
                                            className="certificates__thumbnail-btn"
                                            onClick={() => setLightboxCert(cert)}
                                            aria-label={`Ver imagen de: ${cert.title}`}
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="certificates__thumbnail"
                                                loading="lazy"
                                            />
                                            <div className="certificates__thumbnail-overlay">
                                                <FontAwesomeIcon icon={faExpand} />
                                                <span>Ver certificado</span>
                                            </div>
                                        </button>
                                    )}

                                    <div className="certificates__featured-card-body">
                                        <div className="certificates__featured-card-top">
                                            <IssuerLogo issuer={cert.issuer} size="lg" />
                                            <span
                                                className="certificates__category-tag"
                                                style={{ background: meta.bg, color: meta.color }}
                                            >
                                                {cert.category}
                                            </span>
                                        </div>

                                        <h3 className="certificates__card-title">{cert.title}</h3>
                                        <p className="certificates__card-desc">{cert.description}</p>

                                        <div className="certificates__card-meta">
                                            <span className="certificates__card-meta-item">
                                                <FontAwesomeIcon icon={faBuilding} className="certificates__icon" />
                                                {cert.issuer}
                                            </span>
                                            <span className="certificates__card-meta-item">
                                                <FontAwesomeIcon icon={faCalendarAlt} className="certificates__icon" />
                                                Expedición: {cert.date}
                                            </span>
                                        </div>

                                        <div className="certificates__credential-row">
                                            <FontAwesomeIcon icon={faIdCard} className="certificates__icon" />
                                            <span className="certificates__credential-id" title={cert.credentialId}>
                                                {cert.credentialId.length > 30 ? cert.credentialId.slice(0, 30) + '…' : cert.credentialId}
                                            </span>
                                            <CopyId id={cert.credentialId} />
                                        </div>

                                        <div className="certificates__card-actions">
                                            {cert.url !== '#' && (
                                                <a href={cert.url} className="certificates__card-link" target="_blank" rel="noopener noreferrer">
                                                    Ver credencial
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="certificates__card-link-icon" />
                                                </a>
                                            )}
                                            {cert.pdf && (
                                                <a href={cert.pdf} className="certificates__card-link certificates__card-link--pdf" target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faFilePdf} /> PDF
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* ── Filtros ── */}
                <div className="certificates__filters" role="group" aria-label="Filtrar certificados por categoría">
                    <FontAwesomeIcon icon={faFilter} className="certificates__filters-icon" />
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`certificates__filter-btn ${activeFilter === cat ? 'certificates__filter-btn--active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                            aria-pressed={activeFilter === cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Grid completo ── */}
                <div className="certificates__grid">
                    {filtered.map(cert => {
                        const meta = getIssuerMeta(cert.issuer);
                        return (
                            <article
                                key={cert.id}
                                className="certificates__card"
                                style={{ '--accent-color': meta.color, '--accent-soft': meta.bg }}
                            >
                                {/* Thumbnail si existe */}
                                {cert.image ? (
                                    <button
                                        className="certificates__thumbnail-btn certificates__thumbnail-btn--sm"
                                        onClick={() => setLightboxCert(cert)}
                                        aria-label={`Ver imagen de: ${cert.title}`}
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="certificates__thumbnail certificates__thumbnail--sm"
                                            loading="lazy"
                                        />
                                        <div className="certificates__thumbnail-overlay certificates__thumbnail-overlay--sm">
                                            <FontAwesomeIcon icon={faExpand} />
                                        </div>
                                    </button>
                                ) : (
                                    <div className="certificates__no-image">
                                        <IssuerLogo issuer={cert.issuer} size="lg" />
                                        <span>Sin imagen disponible</span>
                                    </div>
                                )}

                                <div className="certificates__card-body">
                                    <div className="certificates__card-header">
                                        <IssuerLogo issuer={cert.issuer} size="sm" />
                                        <span className="certificates__category-tag" style={{ background: meta.bg, color: meta.color }}>
                                            {cert.category}
                                        </span>
                                    </div>

                                    <h3 className="certificates__card-title">{cert.title}</h3>

                                    <div className="certificates__card-meta">
                                        <span className="certificates__card-meta-item">
                                            <FontAwesomeIcon icon={faBuilding} className="certificates__icon" />
                                            {cert.issuer}
                                        </span>
                                        <span className="certificates__card-meta-item">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="certificates__icon" />
                                            {cert.date}
                                        </span>
                                    </div>

                                    <div className="certificates__credential-row">
                                        <FontAwesomeIcon icon={faIdCard} className="certificates__icon" />
                                        <span className="certificates__credential-id" title={cert.credentialId}>
                                            {cert.credentialId.length > 22 ? cert.credentialId.slice(0, 22) + '…' : cert.credentialId}
                                        </span>
                                        <CopyId id={cert.credentialId} />
                                    </div>

                                    <div className="certificates__card-footer">
                                        <div className="certificates__card-actions certificates__card-actions--sm">
                                            {cert.url !== '#' && (
                                                <a href={cert.url} className="certificates__card-link certificates__card-link--icon" target="_blank" rel="noopener noreferrer" title="Ver credencial">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                            )}
                                            {cert.pdf && (
                                                <a href={cert.pdf} className="certificates__card-link certificates__card-link--icon" target="_blank" rel="noopener noreferrer" title="Descargar PDF">
                                                    <FontAwesomeIcon icon={faFilePdf} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* ── Stats ── */}
                <div className="certificates__stats">
                    <div className="certificates__stat">
                        <span className="certificates__stat-number">7</span>
                        <span className="certificates__stat-label">Certificados</span>
                    </div>
                    <div className="certificates__stat-divider" />
                    <div className="certificates__stat">
                        <span className="certificates__stat-number">3</span>
                        <span className="certificates__stat-label">Instituciones</span>
                    </div>
                    <div className="certificates__stat-divider" />
                    <div className="certificates__stat">
                        <span className="certificates__stat-number">3</span>
                        <span className="certificates__stat-label">Áreas de expertise</span>
                    </div>
                    <div className="certificates__stat-divider" />
                    <div className="certificates__stat">
                        <span className="certificates__stat-number">2026</span>
                        <span className="certificates__stat-label">Último certificado</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certificates;

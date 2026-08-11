import React, { useState } from "react";
import './FinancialModelViewer.css';

const DRIVE_CONFIG = {
  embedSrc: "https://docs.google.com/spreadsheets/d/1-wsRMzyoxCEmGkSQv-p6-83Mda3JSVWv/pubhtml?widget=true&headers=false",
  viewLink: "https://docs.google.com/spreadsheets/d/1-wsRMzyoxCEmGkSQv-p6-83Mda3JSVWv/edit?usp=sharing",
};

const sheets = [
  {
    id: "supuestos",
    name: "Supuestos",
    rows: "52 l\u00edneas",
    desc: "Capital en 3 rondas, costos de inversi\u00f3n (GPU, laptop, ingenier\u00eda), estructura de precios B2C/B2B/institucional y supuestos de churn. Inputs en azul son modificables; celdas en amarillo son supuestos cr\u00edticos.",
    sample: [
      ["Capital Founder (Mes 1)", "S/. 3,000"],
      ["Ronda 1 \u2014 Pre-seed (Mes 3)", "S/. 5,855"],
      ["Ronda 2 \u2014 Seed (Mes 9)", "S/. 6,000"],
      ["Inversi\u00f3n MVP total (hardware + ing.)", "S/. 13,800"],
    ],
  },
  {
    id: "resultados",
    name: "Est. Resultados",
    rows: "32 l\u00edneas",
    desc: "Ingresos por l\u00ednea de negocio (B2C, B2B, licencias institucionales, consultorías), COGS, OPEX, margen bruto, EBITDA y utilidad neta mes a mes.",
    sample: [
      ["Ingresos totales (mes 24)", "S/. 12,940"],
      ["Margen bruto (mes 24)", "98.2%"],
      ["EBITDA (mes 24)", "S/. 10,031"],
      ["Utilidad neta (mes 24)", "S/. 7,072"],
    ],
  },
  {
    id: "flujo",
    name: "Flujo de Caja",
    rows: "24 l\u00edneas",
    desc: "Saldo inicial, entradas operativas por l\u00ednea, salidas por COGS/OPEX/MVP/impuesto a la renta, financiaci\u00f3n de las 3 rondas y saldo final de caja, mes a mes.",
    sample: [
      ["Saldo m\u00ednimo de caja", "S/. -10,980 (mes 2)"],
      ["Caja positiva desde", "Mes 17 (nov-27)"],
      ["Saldo final (mes 24)", "S/. 33,967"],
      ["Capital total recaudado", "S/. 14,855"],
    ],
  },
  {
    id: "balance",
    name: "Balance General",
    rows: "18 l\u00edneas",
    desc: "Activo corriente (caja operativa) y no corriente (intangible tecnol\u00f3gico amortizado a 36 meses), pasivo (IR por pagar) y patrimonio acumulado al cierre del horizonte.",
    sample: [
      ["Activo total (mes 24)", "S/. 38,919"],
      ["Pasivo total (mes 24)", "S/. 2,959"],
      ["Patrimonio (mes 24)", "S/. 47,767"],
      ["Ratio de solvencia", "13.15x"],
    ],
  },
  {
    id: "indicadores",
    name: "Indicadores",
    rows: "26 l\u00edneas",
    desc: "Unit economics (ARPU S/. 25, CAC, LTV S/. 500), runway, burn rate, MRR y KPIs de salud financiera consolidados desde las otras 4 hojas.",
    sample: [
      ["LTV / CAC pico (mes 9)", "17.5x"],
      ["LTV / CAC madurez (mes 24)", "16.7x"],
      ["Break-even operativo", "Mes 11 (may-27)"],
      ["Clientes activos (mes 24)", "279"],
    ],
  },
];

export default function FinancialModelViewer() {
  const [activeSheet, setActiveSheet] = useState(sheets[0].id);
  const [showEmbed, setShowEmbed] = useState(false);

  const current = sheets.find((s) => s.id === activeSheet) ?? sheets[0];

  return (
    <section className="fmv" id="modelo-financiero">
      <div className="fmv__wrap">
        <p className="fmv__eyebrow">Modelo financiero \u00b7 SGIA</p>

        <div className="fmv__head">
          <div>
            <h2 className="fmv__title">
              El modelo completo, a la vista \u2014 sin salir con una copia.
            </h2>
            <p className="fmv__lede">
              5 hojas, 24 meses, f\u00f3rmulas encadenadas de extremo a extremo.
              Explora el resumen de cada hoja abajo, o abre la vista completa
              en modo solo lectura.
            </p>
          </div>
          <span className="fmv__badge">Solo lectura \u00b7 sin descarga</span>
        </div>

        <div className="fmv__tabs" role="tablist" aria-label="Hojas del modelo">
          {sheets.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === activeSheet}
              className={`fmv__tab ${s.id === activeSheet ? "fmv__tab--active" : ""}`}
              onClick={() => setActiveSheet(s.id)}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="fmv__panel">
          <div className="fmv__panel-top">
            <h3 className="fmv__sheet-name">{current.name}</h3>
            <span className="fmv__sheet-rows">{current.rows}</span>
          </div>
          <p className="fmv__sheet-desc">{current.desc}</p>

          <div className="fmv__sample-grid">
            {current.sample.map(([label, value]) => (
              <div className="fmv__sample-cell" key={label}>
                <div className="fmv__sample-label">{label}</div>
                <div className="fmv__sample-value">{value}</div>
              </div>
            ))}
          </div>

          <p className="fmv__watermark-note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Vista de solo resumen \u2014 cifras completas y f\u00f3rmulas en el modelo original.
          </p>

          <div className="fmv__cta-row">
            <button className="fmv__btn fmv__btn--primary" onClick={() => setShowEmbed((v) => !v)}>
              {showEmbed ? "Ocultar hoja completa" : "Ver hoja completa embebida"}
            </button>
            <a
              className="fmv__btn fmv__btn--ghost"
              href={DRIVE_CONFIG.viewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Drive \u2197
            </a>
          </div>

          {showEmbed && (
            <div className="fmv__embed-wrap">
              <div className="fmv__embed-head">
                <span>modelo_financiero_SGIA_v2 \u2014 vista en vivo</span>
                <span>Descarga deshabilitada por el propietario</span>
              </div>
              <div className="fmv__embed-frame">
                <iframe
                  src={DRIVE_CONFIG.embedSrc}
                  title="Modelo financiero SGIA \u2014 vista de solo lectura"
                  loading="lazy"
                />
                <div className="fmv__embed-shield" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
import React, { useState, useMemo } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import './FinancialCaseStudy.css';

const months = [
  "Jul-26","Ago-26","Sep-26","Oct-26","Nov-26","Dic-26",
  "Ene-27","Feb-27","Mar-27","Abr-27","May-27","Jun-27",
  "Jul-27","Ago-27","Sep-27","Oct-27","Nov-27","Dic-27",
  "Ene-28","Feb-28","Mar-28","Abr-28","May-28","Jun-28",
];

const ingresos = [0,0,50,75,245,1120,540,690,2135,1535,2680,2600,3795,3415,5010,5480,5175,6845,7390,8430,8345,10235,11000,12940];
const ebitda   = [-89.85,-89.85,-190.35,-1036.85,-889.85,-1051.85,-1366.35,-1250.85,-198.35,-823.35,286.15,169.65,1338.65,932.65,2491.15,2923.65,2591.65,4224.15,4730.65,5721.65,5586.65,7426.65,8141.65,10030.65];
const caja      = [-6789.85,-10979.7,-5315.05,-6351.9,-7241.75,-8293.6,-9659.95,-10910.8,-5109.15,-5932.5,-5730.76,-5611.16,-4667.41,-4009.89,-2253.63,-192.46,1634.65,4612.68,7947.79,11981.55,15920.14,21155.93,26895.79,33967.40];
const usuarios  = [0,0,2,3,6,9,14,20,29,37,47,59,71,84,99,114,130,148,166,187,208,231,254,279];
const margenBruto = [0,0,-156,-71,47,5,75,80,93,90,94,94,96,95,97,97,96,97,97,98,97,98,98,98];

const capitalEvents = [
  { idx: 0, label: "Founder", value: 3000 },
  { idx: 2, label: "Pre-seed", value: 5855 },
  { idx: 8, label: "Seed", value: 6000 },
];

const chartData = months.map((m, i) => ({
  mes: m,
  ingresos: ingresos[i],
  ebitda: ebitda[i],
  caja: caja[i],
  usuarios: usuarios[i],
  margen: margenBruto[i],
}));

const modules = [
  {
    id: "liquidez",
    kicker: "01 \u2014 Liquidez",
    title: "El efectivo decide, no la utilidad",
    stat: "0 d\u00edas",
    statLabel: "ciclo de cobro efectivo",
    body:
      "SGIA cobra el mismo mes en que factura \u2014 sin cuentas por cobrar. Si el cobro se moviera a 30 d\u00edas, el saldo de caja de septiembre pasar\u00eda de S/. -5,315 a S/. -5,365, justo cuando vencen Supabase, Claude API y planilla. La liquidez, no el margen, es lo que paga las cuentas ese mes.",
    chartType: "caja",
  },
  {
    id: "utilidad-caja",
    kicker: "02 \u2014 Utilidad vs. caja",
    title: "Una p\u00e9rdida contable no es una crisis de caja \u2014 hasta que lo es",
    stat: "S/. -1,037",
    statLabel: "p\u00e9rdida neta, oct-26",
    body:
      "En octubre la utilidad neta cae a S/. -1,036.85, pero la salida real de caja fue de S/. 1,111.85 \u2014 casi lo mismo. La lecci\u00f3n no es esa coincidencia: es que una compra grande (ej. un equipo de S/. 4,000) golpea la caja de inmediato, pero la utilidad solo refleja una fracci\u00f3n v\u00eda depreciaci\u00f3n. Son dos verdades distintas del mismo mes.",
    chartType: "ebitda",
  },
  {
    id: "runway",
    kicker: "03 \u2014 Runway",
    title: "El capital compra tiempo, no certeza",
    stat: "7.9 meses",
    statLabel: "runway tras contratar (oct-26)",
    body:
      "Al incorporar CEO y escalar marketing en el mes 4, el burn mensual salta 362% y el runway cae de 36 a 7.9 meses. Esa ca\u00edda es la que fija el calendario real: la ronda seed entra en el mes 9, antes de tocar el piso cr\u00edtico de 6 meses.",
    chartType: "runway",
  },
  {
    id: "unit-economics",
    kicker: "04 \u2014 Unit economics",
    title: "El filtro que decide si crecer es rentable o solo caro",
    stat: "16.7x",
    statLabel: "LTV / CAC en madurez (mes 24)",
    body:
      "Con ARPU de S/. 25 y churn de 5%, el LTV se sostiene en S/. 500. El CAC se mueve entre S/. 25 y S/. 40 seg\u00fan el mes, pero el ratio nunca baja de 12x \u2014 muy por encima del umbral de 3x que separa un negocio escalable de uno que solo quema capital m\u00e1s r\u00e1pido cuanto m\u00e1s crece.",
    chartType: "usuarios",
  },
  {
    id: "margen",
    kicker: "05 \u2014 Apalancamiento operativo",
    title: "Costos casi fijos, ingresos casi puros",
    stat: "94\u201398%",
    statLabel: "margen bruto en madurez",
    body:
      "Supabase, Claude API e infraestructura son casi enteramente costos fijos. Por debajo de S/. 150/mes de ingresos el margen es negativo \u2014 el costo fijo pesa m\u00e1s que el ingreso. Por encima de ese punto, cada usuario adicional cae casi entero a utilidad: el margen pasa de -156% en el mes 3 a 98% en el mes 24.",
    chartType: "margen",
  },
];

const AXIS_STYLE = { fontSize: 11, fill: "#6A6A6A", fontFamily: "'IBM Plex Mono', monospace" };
const GRID_STROKE = "#E0E0E0";

function ChartFrame({ type }) {
  if (type === "caja") {
    return (
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={GRID_STROKE} vertical={false} />
          <XAxis dataKey="mes" tick={AXIS_STYLE} interval={2} axisLine={{ stroke: GRID_STROKE }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v/1000).toFixed(0)}k`} />
          <ReferenceLine y={0} stroke="#D0D0D0" strokeDasharray="3 3" />
          <Tooltip content={<FinTooltip primary="caja" primaryLabel="Saldo de caja" />} />
          <Area type="monotone" dataKey="caja" stroke="#FF6600" fill="#FF6600" fillOpacity={0.1} strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
  if (type === "ebitda") {
    return (
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={GRID_STROKE} vertical={false} />
          <XAxis dataKey="mes" tick={AXIS_STYLE} interval={2} axisLine={{ stroke: GRID_STROKE }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v/1000).toFixed(1)}k`} />
          <ReferenceLine y={0} stroke="#D0D0D0" strokeDasharray="3 3" />
          <Tooltip content={<FinTooltip primary="ebitda" primaryLabel="EBITDA" secondary="ingresos" secondaryLabel="Ingresos" />} />
          <Bar dataKey="ebitda" fill="#FF7A1A" fillOpacity={0.85} radius={[2, 2, 0, 0]} />
          <Line type="monotone" dataKey="ingresos" stroke="#FF6600" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
  if (type === "runway") {
    return (
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={GRID_STROKE} vertical={false} />
          <XAxis dataKey="mes" tick={AXIS_STYLE} interval={2} axisLine={{ stroke: GRID_STROKE }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v/1000).toFixed(0)}k`} />
          <Tooltip content={<FinTooltip primary="caja" primaryLabel="Caja disponible" />} />
          <Area type="monotone" dataKey="caja" stroke="#FF6600" fill="#FF6600" fillOpacity={0.08} strokeWidth={2} />
          {capitalEvents.map((e) => (
            <ReferenceLine
              key={e.label}
              x={months[e.idx]}
              stroke="#FF7A1A"
              strokeDasharray="4 4"
              label={{ value: e.label, position: "top", fill: "#FF7A1A", fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
  if (type === "usuarios") {
    return (
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={GRID_STROKE} vertical={false} />
          <XAxis dataKey="mes" tick={AXIS_STYLE} interval={2} axisLine={{ stroke: GRID_STROKE }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} />
          <Tooltip content={<FinTooltip primary="usuarios" primaryLabel="Usuarios activos" />} />
          <Bar dataKey="usuarios" fill="#FF6600" fillOpacity={0.85} radius={[2, 2, 0, 0]} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
  if (type === "margen") {
    return (
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
          <CartesianGrid stroke={GRID_STROKE} vertical={false} />
          <XAxis dataKey="mes" tick={AXIS_STYLE} interval={2} axisLine={{ stroke: GRID_STROKE }} tickLine={false} />
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} domain={[-160, 100]} />
          <ReferenceLine y={0} stroke="#D0D0D0" strokeDasharray="3 3" />
          <Tooltip content={<FinTooltip primary="margen" primaryLabel="Margen bruto" suffix="%" />} />
          <Area type="monotone" dataKey="margen" stroke="#FF7A1A" fill="#FF7A1A" fillOpacity={0.12} strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
  return null;
}

function FinTooltip({ active, payload, label, primary, primaryLabel, secondary, secondaryLabel, suffix = "" }) {
  if (!active || !payload || !payload.length) return null;
  const p = payload.find((d) => d.dataKey === primary);
  const s = secondary ? payload.find((d) => d.dataKey === secondary) : null;
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: 4,
        padding: "10px 12px",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        color: "#2B2B2B",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ color: "#6A6A6A", marginBottom: 4 }}>{label}</div>
      {p && (
        <div>
          {primaryLabel}: <strong style={{ color: "#FF6600" }}>{typeof p.value === "number" ? p.value.toLocaleString("es-PE", { maximumFractionDigits: 1 }) : p.value}{suffix}</strong>
        </div>
      )}
      {s && (
        <div>
          {secondaryLabel}: <strong style={{ color: "#FF7A1A" }}>{s.value.toLocaleString("es-PE")}</strong>
        </div>
      )}
    </div>
  );
}

export default function FinancialCaseStudy() {
  const [openId, setOpenId] = useState(modules[0].id);

  const activeModule = useMemo(
    () => modules.find((m) => m.id === openId) ?? modules[0],
    [openId]
  );

  return (
    <section className="fcs" id="case-study">
      <div className="fcs__wrap">
        <p className="fcs__eyebrow">Case study · Modelo financiero SGIA</p>

        <div className="fcs__hero">
          <div>
            <h2 className="fcs__title">
              Modelar si el negocio <em>sobrevive</em>, no solo si funciona.
            </h2>
            <p className="fcs__lede">
              Un recorrido de 24 meses por las decisiones financieras detrás
              de SGIA — de S/. 3,000 de capital fundador a un negocio con
              98% de margen bruto y runway propio. Cada módulo abajo está
              construido con las cifras reales del modelo, no con ejemplos
              genéricos.
            </p>
          </div>
          <div className="fcs__headline-stats">
            <div className="fcs__hstat">
              <span className="fcs__hstat-value">S/. 14.9k</span>
              <span className="fcs__hstat-label">capital total, 3 rondas</span>
            </div>
            <div className="fcs__hstat">
              <span className="fcs__hstat-value">Mes 10</span>
              <span className="fcs__hstat-label">break-even operativo</span>
            </div>
            <div className="fcs__hstat">
              <span className="fcs__hstat-value">16.7x</span>
              <span className="fcs__hstat-label">LTV / CAC en madurez</span>
            </div>
          </div>
        </div>

        <div className="fcs__timeline" aria-hidden="true">
          <span className="fcs__timeline-label">Jul 2026</span>
          <div className="fcs__timeline-track" />
          <span className="fcs__timeline-label">Jun 2028</span>
        </div>

        <div className="fcs__body">
          <nav className="fcs__nav" aria-label="Módulos de análisis">
            {modules.map((m) => (
              <button
                key={m.id}
                className={`fcs__nav-item ${m.id === openId ? "fcs__nav-item--active" : ""}`}
                onClick={() => setOpenId(m.id)}
                aria-current={m.id === openId}
              >
                <span className="fcs__nav-kicker">{m.kicker}</span>
                <span className="fcs__nav-title">{m.title}</span>
              </button>
            ))}
          </nav>

          <div className="fcs__panel">
            <div className="fcs__panel-head">
              <h3 className="fcs__panel-title">{activeModule.title}</h3>
              <div className="fcs__panel-stat">
                <span className="fcs__panel-stat-value">{activeModule.stat}</span>
                <span className="fcs__panel-stat-label">{activeModule.statLabel}</span>
              </div>
            </div>

            <p className="fcs__panel-body">{activeModule.body}</p>

            <div className="fcs__chart-box">
              <ChartFrame type={activeModule.chartType} />
            </div>
          </div>
        </div>

        <div className="fcs__foot">
          <span className="fcs__foot-note">
            Fuente: modelo financiero SGIA v2, 24 meses (jul-26 → jun-28).
            Cifras en soles peruanos (S/.).
          </span>
        </div>
      </div>
    </section>
  );
}
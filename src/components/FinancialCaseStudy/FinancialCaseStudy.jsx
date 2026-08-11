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
  "Jul-26", "Ago-26", "Sep-26", "Oct-26", "Nov-26", "Dic-26",
  "Ene-27", "Feb-27", "Mar-27", "Abr-27", "May-27", "Jun-27",
  "Jul-27", "Ago-27", "Sep-27", "Oct-27", "Nov-27", "Dic-27",
  "Ene-28", "Feb-28", "Mar-28", "Abr-28", "May-28", "Jun-28",
];

const ingresos = [0, 0, 50, 75, 245, 1120, 540, 690, 2135, 1535, 2680, 2600, 3795, 3415, 5010, 5480, 5175, 6845, 7390, 8430, 8345, 10235, 11000, 12940];
const ebitda = [-89.85, -89.85, -190.35, -1036.85, -889.85, -1051.85, -1366.35, -1250.85, -198.35, -823.35, 286.15, 169.65, 1338.65, 932.65, 2491.15, 2923.65, 2591.65, 4224.15, 4730.65, 5721.65, 5586.65, 7426.65, 8141.65, 10030.65];
const caja = [-6789.85, -10979.7, -5315.05, -6351.9, -7241.75, -8293.6, -9659.95, -10910.8, -5109.15, -5932.5, -5730.76, -5611.16, -4667.41, -4009.89, -2253.63, -192.46, 1634.65, 4612.68, 7947.79, 11981.55, 15920.14, 21155.93, 26895.79, 33967.40];
const usuarios = [0, 0, 2, 3, 6, 9, 14, 20, 29, 37, 47, 59, 71, 84, 99, 114, 130, 148, 166, 187, 208, 231, 254, 279];
const margenBruto = [0, 0, -156, -70.7, 46.9, 5.2, 75.0, 80.0, 93.3, 90.5, 94.4, 94.0, 95.8, 95.2, 96.6, 96.8, 96.5, 97.3, 97.4, 97.6, 97.5, 97.9, 97.9, 98.2];

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
      "SGIA cobra el mismo mes en que factura \u2014 sin cuentas por cobrar. En septiembre (mes 3) el saldo de caja es S/. -5,315 con ingresos de S/. 50 y COGS de S/. 128 (Supabase + Claude API + GitHub). Si el cobro se moviera a 30 d\u00edas, ese saldo ser\u00eda S/. -5,365 \u2014 50 soles menos que podr\u00edan no cubrir Supabase. La liquidez, no el margen, es lo que paga las cuentas ese mes.",
    chartType: "caja",
  },
  {
    id: "utilidad-caja",
    kicker: "02 \u2014 Utilidad vs. caja",
    title: "Una p\u00e9rdida contable no es una crisis de caja \u2014 hasta que lo es",
    stat: "S/. -1,037",
    statLabel: "p\u00e9rdida neta, oct-26",
    body:
      "En octubre (mes 4) el EBITDA cae a S/. -1,036.85 y el flujo neto del per\u00edodo es exactamente el mismo \u2014 porque ese mes no hay CAPEX ni amortizaci\u00f3n que abra diferencia. Pero en los meses 1 y 2, la inversi\u00f3n MVP de S/. 9,700 + S/. 4,100 golpe\u00f3 la caja de inmediato mientras el modelo solo la amortiza S/. 412.64/mes durante 36 meses. El mismo hecho financiero, dos lecturas distintas: caja ve el impacto hoy, utilidad lo distribuye en 3 a\u00f1os.",
    chartType: "ebitda",
  },
  {
    id: "runway",
    kicker: "03 \u2014 Runway",
    title: "El capital compra tiempo, no certeza",
    stat: "7.9 meses",
    statLabel: "runway tras contratar (oct-26)",
    body:
      "Al incorporar CEO (S/. 800/mes) y dev freelance en los meses 4\u20137, el burn salta de S/. 89.85 a S/. 1,906/mes \u2014 un 2,020% de incremento. El saldo m\u00ednimo de caja toca S/. -10,980 en el mes 2 (antes del pre-seed). La ronda seed de S/. 6,000 entra en el mes 9, justo cuando el runway cae a su punto cr\u00edtico, y desde ah\u00ed los ingresos toman el relevo.",
    chartType: "runway",
  },
  {
    id: "unit-economics",
    kicker: "04 \u2014 Unit economics",
    title: "El filtro que decide si crecer es rentable o solo caro",
    stat: "17.5x",
    statLabel: "LTV / CAC pico \u2014 mes 9 (seed)",
    body:
      "Con ARPU de S/. 25 y churn de 5%, el LTV se sostiene en S/. 500. El CAC oscila entre S/. 25 y S/. 80 seg\u00fan el mes, con pico de 17.5x en el mes 9 y estabiliz\u00e1ndose en 16.7x al mes 24 \u2014 muy por encima del umbral de 3x que separa un negocio escalable de uno que solo quema capital m\u00e1s r\u00e1pido cuanto m\u00e1s crece.",
    chartType: "usuarios",
  },
  {
    id: "margen",
    kicker: "05 \u2014 Apalancamiento operativo",
    title: "Costos casi fijos, ingresos casi puros",
    stat: "94\u201398.2%",
    statLabel: "margen bruto meses 11\u201324",
    body:
      "Supabase (S/. 95/mes), Claude API (desde S/. 15/mes) y GitHub (S/. 15/mes) son costos pr\u00e1cticamente fijos. Por debajo de S/. 128/mes de ingresos el margen es negativo \u2014 el COGS pesa m\u00e1s que el ingreso. Por encima de ese punto, cada usuario adicional cae casi entero a utilidad: el margen bruto pasa de -156% en el mes 3 a 98.2% en el mes 24, con EBITDA de S/. 10,031.",
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
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v / 1000).toFixed(0)}k`} />
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
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v / 1000).toFixed(1)}k`} />
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
          <YAxis tick={AXIS_STYLE} axisLine={false} tickLine={false} tickFormatter={(v) => `S/${(v / 1000).toFixed(0)}k`} />
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
              <span className="fcs__hstat-value">S/. 14,855</span>
              <span className="fcs__hstat-label">capital total, 3 rondas</span>
            </div>
            <div className="fcs__hstat">
              <span className="fcs__hstat-value">Mes 11</span>
              <span className="fcs__hstat-label">break-even operativo (may-27)</span>
            </div>
            <div className="fcs__hstat">
              <span className="fcs__hstat-value">17.5x</span>
              <span className="fcs__hstat-label">LTV / CAC pico (mes 9)</span>
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
            Fuente: modelo financiero SGIA v2 · 5 hojas · 24 meses (jul-26 → jun-28) · cifras en soles peruanos (S/.) · capital total S/. 14,855 · IR 29.5% aplicado sobre utilidad positiva.
          </span>
        </div>
      </div>
    </section>
  );
}
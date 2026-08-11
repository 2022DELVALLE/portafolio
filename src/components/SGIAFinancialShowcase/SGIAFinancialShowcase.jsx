import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./SGIAFinancialShowcase.css";

// ==========================================
// DATA: VISTA 1 - MODELO FINANCIERO
// ==========================================
const DRIVE_CONFIG = {
  embedSrc: "https://docs.google.com/spreadsheets/d/1-wsRMzyoxCEmGkSQv-p6-83Mda3JSVWv/preview",
  viewLink: "https://docs.google.com/spreadsheets/d/1-wsRMzyoxCEmGkSQv-p6-83Mda3JSVWv/edit?usp=sharing",
};

const sheets = [
  {
    id: "supuestos",
    name: "Supuestos",
    rows: "52 líneas",
    desc: "Capital en 3 rondas, costos de inversión (GPU, laptop, ingeniería), estructura de precios B2C/B2B/institucional y supuestos de churn. Inputs en azul son modificables; celdas en amarillo son supuestos críticos.",
    sample: [
      ["Capital Founder (Mes 1)", "S/. 3,000"],
      ["Ronda 1 — Pre-seed (Mes 3)", "S/. 5,855"],
      ["Ronda 2 — Seed (Mes 9)", "S/. 6,000"],
      ["Inversión MVP total (hardware + ing.)", "S/. 13,800"],
    ],
  },
  {
    id: "resultados",
    name: "Est. Resultados",
    rows: "32 líneas",
    desc: "Ingresos por línea de negocio (B2C, B2B, licencias institucionales, consultorías), COGS, OPEX, margen bruto, EBITDA y utilidad neta mes a mes.",
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
    rows: "24 líneas",
    desc: "Saldo inicial, entradas operativas por línea, salidas por COGS/OPEX/MVP/impuesto a la renta, financiación de las 3 rondas y saldo final de caja, mes a mes.",
    sample: [
      ["Saldo mínimo de caja", "S/. -10,980 (mes 2)"],
      ["Caja positiva desde", "Mes 17 (nov-27)"],
      ["Saldo final (mes 24)", "S/. 33,967"],
      ["Capital total recaudado", "S/. 14,855"],
    ],
  },
  {
    id: "balance",
    name: "Balance General",
    rows: "18 líneas",
    desc: "Activo corriente (caja operativa) y no corriente (intangible tecnológico amortizado a 36 meses), pasivo (IR por pagar) y patrimonio acumulado al cierre del horizonte.",
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
    rows: "26 líneas",
    desc: "Unit economics (ARPU S/. 25, CAC, LTV S/. 500), runway, burn rate, MRR y KPIs de salud financiera consolidados desde las otras 4 hojas.",
    sample: [
      ["LTV / CAC pico (mes 9)", "17.5x"],
      ["LTV / CAC madurez (mes 24)", "16.7x"],
      ["Break-even operativo", "Mes 11 (may-27)"],
      ["Clientes activos (mes 24)", "279"],
    ],
  },
];

// ==========================================
// COMPONENTES: VISTA 2 - PRINCIPIOS
// ==========================================

function Principle1() {
  const [debtPercent, setDebtPercent] = useState(50);
  const totalAssets = 100000;
  const debt = (totalAssets * debtPercent) / 100;
  const equity = totalAssets - debt;

  return (
    <div className="sfs__principle">
      <div className="sfs__principle-head">
        <span className="sfs__principle-num">PRINCIPIO 01 — Usos y fuentes</span>
        <h3 className="sfs__principle-title">Activo = Pasivo + Patrimonio</h3>
        <p className="sfs__principle-kicker">Todo lo que la empresa tiene (activos) fue financiado por terceros (pasivo) o por los dueños (patrimonio).</p>
      </div>
      <div className="sfs__interactive-area">
        <div className="sfs__controls">
          <div className="sfs__control-group">
            <div className="sfs__control-label">
              <span>Estructura de Capital (% Deuda)</span>
              <span>{debtPercent}%</span>
            </div>
            <input type="range" min="0" max="100" value={debtPercent} onChange={(e) => setDebtPercent(e.target.value)} className="sfs__slider" />
          </div>
        </div>
        <div className="sfs__balance-visual">
          <div className="sfs__balance-col" style={{ width: '50%', paddingRight: '8px' }}>
            <div className="sfs__balance-box" style={{ height: '100%', background: '#2B2B2B' }}>
              <span>ACTIVOS</span>
              <span style={{ fontSize: '18px', fontWeight: 600 }}>S/. 100,000</span>
            </div>
          </div>
          <div className="sfs__balance-col" style={{ width: '50%' }}>
            <div className="sfs__balance-box" style={{ height: `${debtPercent}%`, background: '#FF6600', marginBottom: debtPercent === 100 ? 0 : '4px', opacity: debtPercent === 0 ? 0 : 1 }}>
              {debtPercent > 15 && <span>PASIVO (Deuda)</span>}
              {debtPercent > 15 && <span>S/. {debt.toLocaleString()}</span>}
            </div>
            <div className="sfs__balance-box" style={{ height: `${100 - debtPercent}%`, background: '#6A6A6A', opacity: debtPercent === 100 ? 0 : 1 }}>
              {debtPercent < 85 && <span>PATRIMONIO (Equity)</span>}
              {debtPercent < 85 && <span>S/. {equity.toLocaleString()}</span>}
            </div>
          </div>
        </div>
      </div>
      <p className="sfs__principle-conclusion">Una startup en etapa temprana casi siempre es 100% patrimonio, porque sin historial ni flujo de caja predecible, nadie te presta dinero barato.</p>
    </div>
  );
}

function Principle2() {
  const [hasEquipment, setHasEquipment] = useState(false);

  return (
    <div className="sfs__principle">
      <div className="sfs__principle-head">
        <span className="sfs__principle-num">PRINCIPIO 02 — Los 3 estados financieros</span>
        <h3 className="sfs__principle-title">Un solo hecho, tres perspectivas</h3>
        <p className="sfs__principle-kicker">Comprar un equipo al contado impacta tu caja hoy, pero tu utilidad se ve afectada poco a poco durante años.</p>
      </div>
      <div className="sfs__interactive-area">
        <div className="sfs__controls">
          <button className="sfs__btn sfs__btn--primary" onClick={() => setHasEquipment(!hasEquipment)}>
            {hasEquipment ? "Deshacer compra" : "Comprar equipo (S/. 12,000 al contado)"}
          </button>
        </div>
        <div className="sfs__statements-grid">
          <div className="sfs__statement-card">
            <div className="sfs__statement-title">Estado de Resultados (Mes 1)</div>
            <div className="sfs__statement-row"><span>Ingresos</span><span>S/. 5,000</span></div>
            <div className="sfs__statement-row"><span>Costos operativos</span><span>S/. -2,000</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`}><span>Depreciación</span><span>{hasEquipment ? "S/. -333" : "S/. 0"}</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`} style={{ borderTop: '1px solid #EFEFEF', paddingTop: '8px', marginTop: '8px' }}>
              <span>Utilidad Neta</span><span>{hasEquipment ? "S/. 2,667" : "S/. 3,000"}</span>
            </div>
          </div>
          <div className="sfs__statement-card">
            <div className="sfs__statement-title">Flujo de Caja (Mes 1)</div>
            <div className="sfs__statement-row"><span>Flujo Operativo</span><span>S/. 3,000</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`}><span>Capex (Inversión)</span><span>{hasEquipment ? "S/. -12,000" : "S/. 0"}</span></div>
            <div className="sfs__statement-row"><span>Flujo Financiero</span><span>S/. 0</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`} style={{ borderTop: '1px solid #EFEFEF', paddingTop: '8px', marginTop: '8px' }}>
              <span>Flujo Neto</span><span>{hasEquipment ? "S/. -9,000" : "S/. 3,000"}</span>
            </div>
          </div>
          <div className="sfs__statement-card">
            <div className="sfs__statement-title">Balance General (Cierre)</div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`}><span>Efectivo (Caja)</span><span>{hasEquipment ? "S/. 1,000" : "S/. 10,000"}</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`}><span>Activo Fijo Neto</span><span>{hasEquipment ? "S/. 11,667" : "S/. 0"}</span></div>
            <div className="sfs__statement-row"><span>Pasivo Total</span><span>S/. 0</span></div>
            <div className={`sfs__statement-row ${hasEquipment ? 'changed' : ''}`} style={{ borderTop: '1px solid #EFEFEF', paddingTop: '8px', marginTop: '8px' }}>
              <span>Patrimonio Total</span><span>{hasEquipment ? "S/. 12,667" : "S/. 10,000"}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="sfs__principle-conclusion">La utilidad contable no paga sueldos. Puedes ser "rentable" en el Estado de Resultados y aún así quebrar si te quedas sin caja por inversiones agresivas o cobros tardíos.</p>
    </div>
  );
}

function Principle3() {
  const [collectionDays, setCollectionDays] = useState(30);

  const data = useMemo(() => {
    let arr = [];
    let cashA = 5000;
    let cashB = 5000;
    // B cobra a 0 días (inmediato). A cobra a `collectionDays`.
    const revA = 10000; const costA = 8000; // Utilidad 2000
    const revB = 9000;  const costB = 7500; // Utilidad 1500

    let pendingReceivablesA = [];

    for (let month = 1; month <= 12; month++) {
      // Gastos se pagan mes a mes
      cashB += (revB - costB);
      cashA -= costA;
      
      // Cobros A entran con retraso
      pendingReceivablesA.push(revA);
      let monthsDelay = Math.floor(collectionDays / 30);
      if (pendingReceivablesA.length > monthsDelay) {
        cashA += pendingReceivablesA.shift();
      }

      arr.push({ month: `M${month}`, Caja_Empresa_A: cashA, Caja_Empresa_B: cashB });
    }
    return arr;
  }, [collectionDays]);

  return (
    <div className="sfs__principle">
      <div className="sfs__principle-head">
        <span className="sfs__principle-num">PRINCIPIO 03 — El efectivo es el Rey</span>
        <h3 className="sfs__principle-title">Dime cuándo cobras y te diré si sobrevives</h3>
        <p className="sfs__principle-kicker">La Empresa A tiene más utilidad (S/. 2,000 vs S/. 1,500), pero da crédito a sus clientes. Ajusta los días de cobro para ver cuándo quiebra.</p>
      </div>
      <div className="sfs__interactive-area">
        <div className="sfs__controls">
          <div className="sfs__control-group">
            <div className="sfs__control-label">
              <span>Días de cobro (Empresa A)</span>
              <span>{collectionDays} días</span>
            </div>
            <input type="range" min="0" max="90" step="30" value={collectionDays} onChange={(e) => setCollectionDays(Number(e.target.value))} className="sfs__slider" />
          </div>
        </div>
        <div className="sfs__chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6A6A6A' }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6A6A6A' }} tickLine={false} axisLine={false} tickFormatter={(v) => `S/${v / 1000}k`} />
              <Tooltip 
                contentStyle={{ background: "#FFF", borderRadius: "4px", border: "1px solid #EFEFEF", fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace" }}
                formatter={(val) => [`S/. ${val.toLocaleString()}`, "Caja"]}
              />
              <Line type="monotone" name="Empresa A (Alta Utilidad, Cobro Lento)" dataKey="Caja_Empresa_A" stroke="#FF6600" strokeWidth={3} dot={{ r: 3 }} />
              <Line type="monotone" name="Empresa B (Baja Utilidad, Cobro 0 días)" dataKey="Caja_Empresa_B" stroke="#2B2B2B" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="sfs__principle-conclusion">Crecer rápido con pagos diferidos es suicidio financiero. El capital de trabajo negativo requiere financiamiento externo constante, mientras que cobrar por adelantado crea crecimiento autofinanciado.</p>
    </div>
  );
}

function Principle4() {
  const [capitalNeeded, setCapitalNeeded] = useState(50000);
  const costOfDebt = capitalNeeded * 0.15; // 15% interest
  const equityGiven = 10; // Fixed 10%
  const targetValuation = 5000000;
  const costOfEquity = targetValuation * (equityGiven / 100);

  return (
    <div className="sfs__principle">
      <div className="sfs__principle-head">
        <span className="sfs__principle-num">PRINCIPIO 04 — Deuda vs. Capital</span>
        <h3 className="sfs__principle-title">¿Qué fuente de financiamiento es más cara?</h3>
        <p className="sfs__principle-kicker">La deuda te cuesta intereses explícitos hoy. El capital (equity) no requiere pagos fijos, pero te cuesta porcentaje de tu empresa mañana.</p>
      </div>
      <div className="sfs__interactive-area">
        <div className="sfs__controls">
          <div className="sfs__control-group">
            <div className="sfs__control-label">
              <span>Capital requerido</span>
              <span>S/. {capitalNeeded.toLocaleString()}</span>
            </div>
            <input type="range" min="10000" max="100000" step="5000" value={capitalNeeded} onChange={(e) => setCapitalNeeded(Number(e.target.value))} className="sfs__slider" />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ background: '#FFF2EA', padding: '20px', borderRadius: '6px', border: '1px solid #FFE5D3' }}>
            <h4 style={{ margin: '0 0 16px', fontFamily: "'IBM Plex Mono', monospace", color: '#FF6600', fontSize: '14px' }}>ESCENARIO A: DEUDA (15% TCEA)</h4>
            <div style={{ fontSize: '13px', color: '#6A6A6A', marginBottom: '8px' }}>Mantienes 100% de la empresa, pero debes pagar:</div>
            <div style={{ fontSize: '24px', fontWeight: 600, color: '#FF6600', marginBottom: '16px' }}>S/. {costOfDebt.toLocaleString()} / año</div>
            <ul style={{ fontSize: '12px', color: '#6A6A6A', paddingLeft: '16px', margin: 0 }}>
              <li>Riesgo de quiebra si no generas flujo para la cuota.</li>
              <li>Requiere garantías reales o histórico de ventas.</li>
            </ul>
          </div>
          <div style={{ background: '#F9F9F9', padding: '20px', borderRadius: '6px', border: '1px solid #EFEFEF' }}>
            <h4 style={{ margin: '0 0 16px', fontFamily: "'IBM Plex Mono', monospace", color: '#2B2B2B', fontSize: '14px' }}>ESCENARIO B: EQUITY (Cedes 10%)</h4>
            <div style={{ fontSize: '13px', color: '#6A6A6A', marginBottom: '8px' }}>No hay cuotas fijas, pero si la empresa llega a valer S/. 5M, te costará:</div>
            <div style={{ fontSize: '24px', fontWeight: 600, color: '#2B2B2B', marginBottom: '16px' }}>S/. {costOfEquity.toLocaleString()}</div>
            <ul style={{ fontSize: '12px', color: '#6A6A6A', paddingLeft: '16px', margin: 0 }}>
              <li>Reduce tu control y utilidades futuras.</li>
              <li>Dinero paciente, absorbe el riesgo junto contigo.</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="sfs__principle-conclusion">El equity es matemáticamente la fuente de dinero más cara a largo plazo si tienes éxito. Úsalo solo para financiar apuestas de alto riesgo y crecimiento explosivo; usa deuda para activos fijos y flujos predecibles.</p>
    </div>
  );
}

function Principle5() {
  const [price, setPrice] = useState(25);
  const [churn, setChurn] = useState(5);
  const [growth, setGrowth] = useState(15);

  const projection = useMemo(() => {
    let arr = [];
    let users = 0;
    let cash = 15000; // Inicial
    const fixedCosts = 2500;
    
    for (let m = 1; m <= 24; m++) {
      users = Math.max(0, users + growth - (users * (churn / 100)));
      const rev = users * price;
      const profit = rev - fixedCosts;
      cash += profit;
      arr.push({
        month: `M${m}`,
        Caja: Math.round(cash),
        Runway: profit < 0 ? Math.max(0, Math.round(cash / Math.abs(profit))) : 99 // 99 means infinite
      });
    }
    return arr;
  }, [price, churn, growth]);

  const finalCash = projection[23].Caja;
  const breakEvenMonth = projection.findIndex(p => p.Caja > 15000 && p.Runway === 99);

  return (
    <div className="sfs__principle">
      <div className="sfs__principle-head">
        <span className="sfs__principle-num">PRINCIPIO 05 — Decisiones financieras</span>
        <h3 className="sfs__principle-title">Pequeñas palancas, impacto gigante</h3>
        <p className="sfs__principle-kicker">Simulador de caja a 24 meses. Ajusta el precio (ARPU), el churn y el crecimiento para ver cómo el modelo explota o se estabiliza.</p>
      </div>
      <div className="sfs__interactive-area">
        <div className="sfs__controls">
          <div className="sfs__control-group">
            <div className="sfs__control-label"><span>Precio (S/. ARPU)</span><span>S/. {price}</span></div>
            <input type="range" min="10" max="60" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="sfs__slider" />
          </div>
          <div className="sfs__control-group">
            <div className="sfs__control-label"><span>Churn mensual (%)</span><span>{churn}%</span></div>
            <input type="range" min="0" max="20" value={churn} onChange={(e) => setChurn(Number(e.target.value))} className="sfs__slider" />
          </div>
          <div className="sfs__control-group">
            <div className="sfs__control-label"><span>Nuevos usuarios / mes</span><span>+{growth}</span></div>
            <input type="range" min="5" max="50" value={growth} onChange={(e) => setGrowth(Number(e.target.value))} className="sfs__slider" />
          </div>
        </div>
        <div className="sfs__chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={projection} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCaja" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={finalCash > 0 ? "#FF6600" : "#DD0000"} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={finalCash > 0 ? "#FF6600" : "#DD0000"} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E0E0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6A6A6A' }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6A6A6A' }} tickLine={false} axisLine={false} tickFormatter={(v) => `S/${Math.round(v / 1000)}k`} />
              <Tooltip 
                contentStyle={{ background: "#FFF", borderRadius: "4px", border: "1px solid #EFEFEF", fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace" }}
                formatter={(val, name) => [name === 'Caja' ? `S/. ${val.toLocaleString()}` : (val === 99 ? 'Infinito' : `${val} meses`), name]}
              />
              <Area type="monotone" name="Caja" dataKey="Caja" stroke={finalCash > 0 ? "#FF6600" : "#DD0000"} strokeWidth={3} fillOpacity={1} fill="url(#colorCaja)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '13px', fontFamily: "'IBM Plex Mono', monospace" }}>
          <div>Caja Final (Mes 24): <strong style={{ color: finalCash > 0 ? '#FF6600' : '#DD0000' }}>S/. {finalCash.toLocaleString()}</strong></div>
          <div>Break-even: <strong>{breakEvenMonth > -1 ? `Mes ${breakEvenMonth + 1}` : 'Nunca'}</strong></div>
        </div>
      </div>
      <p className="sfs__principle-conclusion">Reducir el churn en 2% suele tener más impacto financiero a largo plazo que aumentar la adquisición un 20%. El verdadero valor está en la retención compuesta.</p>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function SGIAFinancialShowcase() {
  const [activeView, setActiveView] = useState("modelo"); // 'modelo' | 'principios'
  const [activeSheet, setActiveSheet] = useState(sheets[0].id);
  const [showEmbed, setShowEmbed] = useState(false);

  const currentSheet = useMemo(() => sheets.find((s) => s.id === activeSheet) ?? sheets[0], [activeSheet]);

  return (
    <section className="sfs" id="financial-showcase">
      <div className="sfs__wrap">
        <p className="sfs__eyebrow">Análisis e Ingeniería Financiera</p>
        
        <div className="sfs__head">
          <div>
            <h2 className="sfs__title">
              {activeView === "modelo" 
                ? "El modelo completo, a la vista — sin salir con una copia."
                : "Aprende jugando: 5 principios financieros para startups."}
            </h2>
            <p className="sfs__lede">
              {activeView === "modelo"
                ? "5 hojas, 24 meses, fórmulas encadenadas de extremo a extremo. Explora el resumen de cada hoja o abre la vista completa en modo solo lectura."
                : "No necesitas ser contador para entender la supervivencia de tu negocio. Juega con los interactivos para ver cómo las variables impactan la vida de una startup."}
            </p>
          </div>
          
          <div className="sfs__toggle-group">
            <button 
              className={`sfs__toggle-btn ${activeView === "modelo" ? "sfs__toggle-btn--active" : ""}`}
              onClick={() => setActiveView("modelo")}
            >
              Modelo Financiero SGIA
            </button>
            <button 
              className={`sfs__toggle-btn ${activeView === "principios" ? "sfs__toggle-btn--active" : ""}`}
              onClick={() => setActiveView("principios")}
            >
              Principios Financieros
            </button>
          </div>
        </div>

        {activeView === "modelo" ? (
          // --- VISTA 1: MODELO FINANCIERO ---
          <div className="sfs__view-modelo">
            <span className="sfs__badge">Solo lectura · sin descarga</span>
            
            <div className="sfs__tabs" role="tablist" aria-label="Hojas del modelo">
              {sheets.map((s) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={s.id === activeSheet}
                  className={`sfs__tab ${s.id === activeSheet ? "sfs__tab--active" : ""}`}
                  onClick={() => setActiveSheet(s.id)}
                >
                  {s.name}
                </button>
              ))}
            </div>

            <div className="sfs__panel">
              <div className="sfs__panel-top">
                <h3 className="sfs__sheet-name">{currentSheet.name}</h3>
                <span className="sfs__sheet-rows">{currentSheet.rows}</span>
              </div>
              <p className="sfs__sheet-desc">{currentSheet.desc}</p>

              <div className="sfs__sample-grid">
                {currentSheet.sample.map(([label, value]) => (
                  <div className="sfs__sample-cell" key={label}>
                    <div className="sfs__sample-label">{label}</div>
                    <div className="sfs__sample-value">{value}</div>
                  </div>
                ))}
              </div>

              <p className="sfs__watermark-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Vista de solo resumen — cifras completas y fórmulas en el modelo original.
              </p>

              <div className="sfs__cta-row">
                <button className="sfs__btn sfs__btn--primary" onClick={() => setShowEmbed((v) => !v)}>
                  {showEmbed ? "Ocultar hoja completa" : "Ver hoja completa embebida"}
                </button>
                <a
                  className="sfs__btn sfs__btn--ghost"
                  href={DRIVE_CONFIG.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir en Google Drive ↗
                </a>
              </div>

              {showEmbed && (
                <div className="sfs__embed-wrap">
                  <div className="sfs__embed-head">
                    <span>modelo_financiero_SGIA_v2 — vista en vivo</span>
                    <span>Descarga deshabilitada por el propietario</span>
                  </div>
                  <div className="sfs__embed-frame">
                    <iframe
                      src={DRIVE_CONFIG.embedSrc}
                      title="Modelo financiero SGIA — vista de solo lectura"
                      loading="lazy"
                    />
                    <div className="sfs__embed-shield" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // --- VISTA 2: PRINCIPIOS FINANCIEROS ---
          <div className="sfs__principles">
            <Principle1 />
            <Principle2 />
            <Principle3 />
            <Principle4 />
            <Principle5 />
          </div>
        )}
      </div>
    </section>
  );
}

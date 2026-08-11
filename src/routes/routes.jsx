import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Hero from './components/Hero/Hero';
import VenturePipeline from './components/VenturePipeline/VenturePipeline';
import VerLaEstrategia from '../components/Verlaestrategia/Ver_la_estrategia';
import Portada from '../components/Portada/PortfolioDashboard';

const routes = [
  { path: '/home', component: <Hero />, label: 'Inicio' },
  { path: '/ventures', component: <VenturePipeline />, label: 'Ventures' },
  { path: '/estrategia', component: <VerLaEstrategia />, label: 'Estrategia' },
  { path: '/portafolio', component: <Portada />, label: 'Portafolio' },
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Hero />} />
      <Route path="/ventures" element={<VenturePipeline />} />
      <Route path="/estrategia" element={<VerLaEstrategia />} />
      <Route path="/arquitectura" element={<VerLaEstrategia />} />
      <Route path="/portafolio" element={<Portada />} />
    </Routes>
  );
};

export { AppRoutes };
import React from 'react';
import Hero from './components/Hero';
import VenturePipeline from './components/VenturePipeline';
import SystemsArchitecture from './components/SystemsArchitecture.js';
import e from './components/PerfumePlaybook.js';

// Aquí hemos eliminado todo el código basura anterior. 
// Solo importamos y renderizamos los componentes necesarios.
function App() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Hero />
      <VenturePipeline />
      <SystemsArchitecture />
      <e />
    </div>
  );
}

export default App;
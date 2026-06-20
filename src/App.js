import React from 'react';
import Hero from './components/Hero/Hero';
import VenturePipeline from './components/VenturePipeline/VenturePipeline';
import SystemsArchitecture from './components/SystemsArchitecture/SystemsArchitecture';
import PerfumePlaybook from './components/PerfumePlaybook/PerfumePlaybook';

// Aquí hemos eliminado todo el código basura anterior. 
// Solo importamos y renderizamos los componentes necesarios.
function App() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Hero />
      <VenturePipeline />
      <SystemsArchitecture />
      <PerfumePlaybook />
      
    </div>
  );
}

export default App;
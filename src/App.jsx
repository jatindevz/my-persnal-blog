import React from 'react'
import Navbar from './components/Navbar.js';
import Aurora from './components/ui/Aurora.jsx';
import LightPillar from './components/ui/LightPillar.jsx';
import ArticlesGrid from './components/Blogs';

function App() {

  return (
    <div className="relative h-screen overflow-x-hidden bg-black text-white">
      <Navbar  />
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={.5}
          rotationSpeed={1.3}
          glowAmount={0.0022}
          pillarWidth={30.0}
          pillarHeight={0.5}
          noiseIntensity={0.5}
          pillarRotation={1}
          interactive={false}
          mixBlendMode="normal"
          className='fixed '
        />
     
      <div className="relative z-10 mt-[400px] flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="mb-18">
        <h1 className="text-4xl font-bold mb-4">My Programming Blogs</h1>
        <p className="text-lg">Might Help You </p>

        </div>
      <ArticlesGrid />
      </div>

      
    </div>
  )
}

export default App

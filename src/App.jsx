import './style/App.css'
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Cargamos los componentes dinámicamente
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Favorites = lazy(() => import('./pages/Favorites'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Ruta dinámica */}
        <Route path="/favorites" element={<Favorites />} /> {/* Ruta de favoritos */}
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
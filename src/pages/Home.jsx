import React, { useEffect, useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import MovieList from '../components/search/MovieList';
import { Link } from 'react-router-dom';
import LanguageSelector from '../components/Language/LanguageSelector';



const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  // Activa la animación después de que el componente se monte
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className='principal'>
      <LanguageSelector /> {/* Selector de idioma */}
      <h1>MovieFinder</h1>
      <nav>
      <Link to="/favorites">Mis favoritos</Link> {/* Enlace a favoritos */}
      </nav>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Home;
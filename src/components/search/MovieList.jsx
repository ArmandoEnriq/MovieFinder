// src/components/search/MovieList.jsx
import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import MovieCard from './MovieCard';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción

const MovieList = () => {
  const { movies } = useContext(MovieContext); // Accede a las películas del contexto
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <div className='peliculas'>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>{t('noResults')}</p>
      )}
    </div>
  );
};

export default MovieList;
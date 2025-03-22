// src/pages/Favorites.jsx
import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/search/MovieCard';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción

const Favorites = () => {
  const { favorites } = useContext(MovieContext);
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  return (
    <div>
      <h1>{t('favorites')}</h1>
      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>{t('noFavorites')}</p>
      )}
    </div>
  );
};

export default Favorites;
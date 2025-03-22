// src/components/favorites/FavoriteButton.jsx
import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const FavoriteButton = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(MovieContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    </button>
  );
};

export default FavoriteButton;
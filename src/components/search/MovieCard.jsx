// src/components/search/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../favorites/FavoriteButton'; // Importamos el botón de favoritos
import Rating from '../rating/Rating';
import '../../style/MovieCard.css'; // Importamos los estilos

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster"  />
      <h3 className="movie-title">{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="details-link">
        Ver detalles
      </Link>
      <FavoriteButton movie={movie} /> {/* Botón de favoritos */}
      <Rating movieId={movie.imdbID} /> {/* Componente de calificación */}
    </div>
  );
};

export default React.memo(MovieCard);
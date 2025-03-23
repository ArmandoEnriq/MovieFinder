// src/pages/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Rating from '../components/rating/Rating'; // Importamos el componente de calificación

const MovieDetails = () => {
  const { id } = useParams(); // Obtenemos el ID de la película de la URL
  const [movie, setMovie] = useState(null); // Estado para almacenar los detalles de la película
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
        );
        setMovie(response.data); // Actualizamos el estado con los detalles de la película
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]); // Se ejecutara cada vez que el id cambia

  if (!movie) {
    return <p>{t('loading')}</p>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} className="w-48 h-auto" />
      <p>{movie.Plot}</p>
      <p>{t('director')}: {movie.Director}</p>
      <p>{t('actors')}: {movie.Actors}</p>
      <p>{t('rating')}: {movie.imdbRating}</p>
      <Rating movieId={id} /> {/* Componente de calificación */}
    </div>
  );
};

export default MovieDetails;
// src/context/MovieContext.js
import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]); // Estado para las películas
  const [favorites, setFavorites] = useState([]); // Estado para los favoritos
  const [ratings, setRatings] = useState({}); // Estado para las calificaciones

  // Función para buscar películas
  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
      );
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search); // Actualiza el estado con el array de películas
      } else {
        setMovies([]); // Si no hay resultados, establece un array vacío
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Función para agregar una película a favoritos
  const addFavorite = (movie) => {
    if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) { //some  Es un método de arrays que devuelve true si al menos un elemento cumple con la condición y fav solo es el nombre que se le da a cada elemento que itera de favoritos
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.imdbID !== id));
  };

  const rateMovie = (id, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: [...(prevRatings[id] || []), rating], // Agregar la nueva calificación
    }));
  };

  const getAverageRating = (id) => {
    if (!ratings[id] || ratings[id].length === 0) return 0;
    const sum = ratings[id].reduce((acc, curr) => acc + curr, 0);
    return (sum / ratings[id].length).toFixed(1); // Calcular el promedio
  };

  return (
    <MovieContext.Provider value={{ movies, favorites, searchMovies, addFavorite, removeFavorite, rateMovie, getAverageRating }}>
      {children}
    </MovieContext.Provider>
  );
};
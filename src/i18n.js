// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en inglés
const en = {
  translation: {
    searchPlaceholder: 'Search movies...',
    searchButton: 'Search',
    noResults: 'No movies found.',
    favorites: 'My Favorites',
    noFavorites: 'You have no favorite movies.',
    addToFavorites: 'Add to favorites',
    removeFromFavorites: 'Remove from favorites',
    viewDetails: 'View details',
    movieDetails: 'Movie Details',
    director: 'Director',
    actors: 'Actors',
    rating: 'Rating',
  },
};

// Traducciones en español
const es = {
  translation: {
    searchPlaceholder: 'Buscar películas...',
    searchButton: 'Buscar',
    noResults: 'No se encontraron películas.',
    favorites: 'Mis favoritas',
    noFavorites: 'No tienes películas favoritas.',
    addToFavorites: 'Agregar a favoritos',
    removeFromFavorites: 'Quitar de favoritos',
    viewDetails: 'Ver detalles',
    movieDetails: 'Detalles de la película',
    director: 'Director',
    actors: 'Actores',
    rating: 'Calificación',
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en,
    es,
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No escapar valores (para usar HTML en las traducciones)
  },
});

export default i18n;
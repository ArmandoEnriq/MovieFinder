// src/components/search/SearchBar.jsx
import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción

const SearchBar = () => {
  const [query, setQuery] = useState(''); // Estado para la consulta de búsqueda
  const { searchMovies } = useContext(MovieContext); // Accede a la función del contexto
  const { t } = useTranslation(); // Hook para acceder a las traducciones

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que el formulario se recargue
    searchMovies(query); // Llama a la función de búsqueda
  };

  return (
    <form onSubmit={handleSearch} >
      <input
        className='buscar'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Actualiza el estado con la consulta
        placeholder={t('searchPlaceholder')} // Usamos la traducción
      />
      <button type="submit">{t('searchButton')}</button>
    </form>
  );
};

export default SearchBar;
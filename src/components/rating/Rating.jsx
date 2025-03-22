// src/components/rating/Rating.jsx
import React, { useState, useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const Rating = ({ movieId }) => {
  const { rateMovie, getAverageRating } = useContext(MovieContext);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRating = (rating) => {
    setSelectedRating(rating);
    rateMovie(movieId, rating);
  };

  return (
    <div className="mt-2">
      <p className="text-sm font-semibold">Calificación promedio: {getAverageRating(movieId)}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`text-2xl ${selectedRating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
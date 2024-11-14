'use client';

import { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (review: { rating: number; comment: string }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Note (1 à 5)</label>
        <select
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Choisir une note</option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Commentaire</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded"
      >
        Ajouter l'avis
      </button>
    </form>
  );
}

'use client';

import { useState } from 'react';
import ReviewForm from '../../../components/ReviewForm';

export default function BookDetails({ params }: { params: { id: string } }) {
  const [books] = useState([
    {
      id: 1,
      title: 'Les Misérables',
      author: 'Victor Hugo',
      year: 1862,
      reviews: [
        { rating: 5, comment: 'Un chef-d’œuvre intemporel.' },
        { rating: 4, comment: 'Un peu long, mais magnifique.' },
      ],
    },
    {
      id: 2,
      title: 'L’Étranger',
      author: 'Albert Camus',
      year: 1942,
      reviews: [{ rating: 5, comment: 'Un roman fascinant.' }],
    },
  ]);
  const [reviews, setReviews] = useState(
    books.find((b) => b.id === parseInt(params.id))?.reviews || []
  );

  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return <div>Livre non trouvé.</div>;
  }

  const handleAddReview = (review: { rating: number; comment: string }) => {
    setReviews([...reviews, review]);
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 'Aucune note';

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p>
        <strong>Auteur : </strong>
        {book.author}
      </p>
      <p>
        <strong>Année : </strong>
        {book.year}
      </p>
      <p>
        <strong>Note moyenne : </strong>
        {averageRating}
      </p>
      <h2 className="mt-6 text-2xl font-bold">Avis</h2>
      <ul className="mt-4 space-y-4">
        {reviews.map((review, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded">
            <p>
              <strong>Note : </strong> {review.rating} / 5
            </p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <h3 className="mt-6 text-xl font-bold">Ajouter un avis</h3>
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
}

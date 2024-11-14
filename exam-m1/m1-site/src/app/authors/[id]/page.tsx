'use client';

import styles from './AuthorDetails.module.css'; // Import du fichier CSS
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
    return <div className={styles.container}>Livre non trouvé.</div>;
  }

  const handleAddReview = (review: { rating: number; comment: string }) => {
    setReviews([...reviews, review]);
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 'Aucune note';

  return (
    <div className={styles.container}>
      {/* Informations principales */}
      <div className={styles.bookDetails}>
        <h1 className={styles.bookTitle}>{book.title}</h1>
        <p className={styles.bookInfo}>
          <strong>Auteur : </strong> {book.author}
        </p>
        <p className={styles.bookInfo}>
          <strong>Année : </strong> {book.year}
        </p>
        <p className={styles.bookInfo}>
          <strong>Note moyenne : </strong>
          <span className={styles.bookRating}>{averageRating}</span>
        </p>
      </div>

      {/* Section des avis */}
      <div className={styles.reviewSection}>
        <h2 className={styles.reviewTitle}>Avis</h2>
        <ul className={styles.reviewList}>
          {reviews.map((review, index) => (
            <li key={index} className={styles.reviewItem}>
              <p className={styles.reviewRating}>
                Note : <span>{review.rating} / 5</span>
              </p>
              <p className={styles.reviewComment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Formulaire pour ajouter un avis */}
      <div className={styles.formSection}>
        <h3 className={styles.formTitle}>Ajouter un Avis</h3>
        <ReviewForm onSubmit={handleAddReview} />
      </div>
    </div>
  );
}

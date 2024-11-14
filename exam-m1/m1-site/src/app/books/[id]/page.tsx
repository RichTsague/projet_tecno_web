'use client';

import styles from './BookDetails.module.css'; // Import du fichier CSS
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [books, setBooks] = useState([
    { id: 1, title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942 },
    { id: 3, title: 'Le Père Goriot', author: 'Honoré de Balzac', year: 1835 },
  ]);

  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>Livre non trouvé.</p>
        <a href="/books" className={`${styles.button} ${styles.return}`}>
          Retour à la liste des livres
        </a>
      </div>
    );
  }

  const handleDelete = () => {
    const updatedBooks = books.filter((b) => b.id !== book.id);
    setBooks(updatedBooks);
    router.push('/books');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{book.title}</h1>
      <p className={styles.text}>
        <strong>Auteur : </strong>
        {book.author}
      </p>
      <p className={styles.text}>
        <strong>Année : </strong>
        {book.year}
      </p>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleDelete}
          className={`${styles.button} ${styles.delete}`}
        >
          Supprimer ce livre
        </button>
        <a href="/books" className={`${styles.button} ${styles.return}`}>
          Retour à la liste des livres
        </a>
      </div>
    </div>
  );
}

'use client';

import styles from './BookDetails.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

interface Book {
  id: number;
  title: string;
  yearPublished: number;
  author: Author;
}

export default function BookDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await api.get(`/books/${params.id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du livre:', error);
        setError('Livre non trouvé.');
      }
    };

    fetchBook();
  }, [params.id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/books/${params.id}`);
      router.push('/books');
    } catch (error) {
      console.error("Erreur lors de la suppression du livre:", error);
    }
  };

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <a href="/books" className={`${styles.button} ${styles.return}`}>
          Retour à la liste des livres
        </a>
      </div>
    );
  }

  if (!book) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Chargement des détails du livre...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{book.title}</h1>
      <p className={styles.text}>
        <strong>Auteur : </strong>
        {book.author.firstName} {book.author.lastName}
      </p>
      <p className={styles.text}>
        <strong>Année : </strong>
        {book.yearPublished}
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

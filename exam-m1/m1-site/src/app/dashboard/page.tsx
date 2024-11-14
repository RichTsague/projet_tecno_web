'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './DashboardPage.module.css'; // Import du fichier CSS

export default function Dashboard() {
  const [books] = useState([
    { id: 1, title: 'Les Misérables', author: 'Victor Hugo', rating: 4.8 },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', rating: 4.5 },
    { id: 3, title: 'Le Père Goriot', author: 'Honoré de Balzac', rating: 4.6 },
  ]);

  const [authors] = useState([
    { id: 1, name: 'Victor Hugo' },
    { id: 2, name: 'Albert Camus' },
    { id: 3, name: 'Honoré de Balzac' },
  ]);

  const totalBooks = books.length;
  const totalAuthors = authors.length;
  const averageRating =
    books.length > 0
      ? (books.reduce((sum, b) => sum + b.rating, 0) / books.length).toFixed(1)
      : 'N/A';

  const topBooks = books
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tableau de Bord</h1>

      {/* Statistiques principales */}
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <h2 className={styles.statsTitle}>Livres</h2>
          <p className={styles.statsValue}>{totalBooks}</p>
          <Link href="/books" className={styles.statsLink}>
            Voir tous les livres
          </Link>
        </div>
        <div className={styles.statsCard}>
          <h2 className={styles.statsTitle}>Auteurs</h2>
          <p className={styles.statsValue}>{totalAuthors}</p>
          <Link href="/authors" className={styles.statsLink}>
            Voir tous les auteurs
          </Link>
        </div>
        <div className={styles.statsCard}>
          <h2 className={styles.statsTitle}>Note Moyenne</h2>
          <p className={styles.statsValue}>{averageRating} / 5</p>
        </div>
      </div>

      {/* Top 3 des livres */}
      <h2 className={styles.topBooksTitle}>Top 3 des Livres</h2>
      <ul className={styles.bookList}>
        {topBooks.map((book) => (
          <li key={book.id} className={styles.bookItem}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookInfo}>Auteur : {book.author}</p>
            <p className={styles.bookInfo}>Note : {book.rating} / 5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

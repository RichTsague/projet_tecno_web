'use client';

import styles from './AuthorsPage.module.css'; // Import du fichier CSS
import Link from 'next/link'; // Import du composant Link
import { useState } from 'react';
import Modal from '../../components/Modal';

export default function Authors() {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: 'Victor Hugo',
      photo: 'https://via.placeholder.com/120',
      booksCount: 5,
      averageRating: 4.8,
    },
    {
      id: 2,
      name: 'Albert Camus',
      photo: 'https://via.placeholder.com/120',
      booksCount: 3,
      averageRating: 4.5,
    },
    {
      id: 3,
      name: 'Honoré de Balzac',
      photo: 'https://via.placeholder.com/120',
      booksCount: 7,
      averageRating: 4.6,
    },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addAuthor = (author: {
    name: string;
    photo: string;
    booksCount: number;
    averageRating: number;
  }) => {
    setAuthors([...authors, { id: authors.length + 1, ...author }]);
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Auteurs</h1>
      <button
        onClick={() => setModalOpen(true)}
        className={styles.addButton}
      >
        Ajouter un Auteur
      </button>
      <div className={styles.authorList}>
        {authors.map((author) => (
          <div key={author.id} className={styles.authorCard}>
            <img
              src={author.photo}
              alt={author.name}
              className={styles.authorPhoto}
            />
            <Link href={`/authors/${author.id}`} className={styles.authorName}>
              {author.name}
            </Link>
            <p className={styles.authorInfo}>
              Livres publiés : {author.booksCount}
            </p>
            <p className={styles.authorInfo}>
              Note moyenne : {author.averageRating}
            </p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const newAuthor = {
              name: formData.get('name') as string,
              photo: formData.get('photo') as string,
              booksCount: parseInt(formData.get('booksCount') as string),
              averageRating: parseFloat(formData.get('averageRating') as string),
            };
            addAuthor(newAuthor);
          }}
          className={styles.modalContent}
        >
          <h2 className={styles.modalTitle}>Ajouter un Auteur</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nom</label>
            <input type="text" name="name" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Photo de l'auteur</label>
            <input type="text" name="photo" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nombre de livres</label>
            <input
              type="number"
              name="booksCount"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Note moyenne</label>
            <input
              type="number"
              step="0.1"
              name="averageRating"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Ajouter
          </button>
        </form>
      </Modal>
    </div>
  );
}

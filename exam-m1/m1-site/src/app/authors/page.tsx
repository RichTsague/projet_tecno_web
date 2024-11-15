// src/app/authors/page.tsx

"use client";

import styles from './AuthorsPage.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import api from '../services/api';

interface Author {
  id: number;
  firstName: string;
  lastName: string;
  photo?: string;
  booksCount: number;
  averageRating: number;
}

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const DEFAULT_PHOTO_URL = "/images/default-author.jpg"; // URL de l'image par défaut

  // Charger les auteurs et les livres depuis l'API
  useEffect(() => {
    const fetchAuthorsAndBooks = async () => {
      try {
        // Récupération des auteurs
        const authorsResponse = await api.get('/authors');
        const authorsData = authorsResponse.data;

        // Récupération des livres
        const booksResponse = await api.get('/books');
        const booksData = booksResponse.data;

        // Associer chaque auteur au nombre de livres qu'il a publiés
        const authorsWithDetails = authorsData.map((author: Author) => {
          const authorBooks = booksData.filter((book: any) => book.authorId === author.id);
          const booksCount = authorBooks.length;

          // Calcul de la note moyenne des livres de cet auteur
          const totalRating = authorBooks.reduce((sum: number, book: any) => sum + (book.rating || 0), 0);
          const averageRating = booksCount > 0 ? (totalRating / booksCount) : 0;

          return { 
            ...author, 
            booksCount, 
            averageRating: parseFloat(averageRating.toFixed(1)),
            photo: author.photo || DEFAULT_PHOTO_URL // Utilise l'image par défaut si aucune photo n'est spécifiée
          };
        });

        setAuthors(authorsWithDetails);
      } catch (error) {
        console.error("Erreur lors de la récupération des auteurs et des livres:", error);
      }
    };

    fetchAuthorsAndBooks();
  }, []);

  // Fonction pour ajouter un auteur
  const addAuthor = async (newAuthor: { firstName: string; lastName: string }) => {
    try {
      const response = await api.post('/authors', newAuthor);
      const createdAuthor = { 
        ...response.data, 
        booksCount: 0, 
        averageRating: 0,
        photo: DEFAULT_PHOTO_URL // Définit l'image par défaut pour le nouvel auteur
      };
      setAuthors([...authors, createdAuthor]);
      setModalOpen(false);
      alert("Auteur ajouté avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'auteur:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Auteurs</h1>
      <button onClick={() => setModalOpen(true)} className={styles.addButton}>Ajouter un Auteur</button>
      
      <div className={styles.authorList}>
        {authors.map((author) => (
          <div key={author.id} className={styles.authorCard}>
            <img src={author.photo} alt={`${author.firstName} ${author.lastName}`} className={styles.authorPhoto} />
            <Link href={`/authors/${author.id}`} className={styles.authorName}>
              {author.firstName} {author.lastName}
            </Link>
            <p className={styles.authorInfo}>Livres publiés : {author.booksCount}</p>
            <p className={styles.authorInfo}>Note moyenne : {author.averageRating}</p>
          </div>
        ))}
      </div>

      {/* Modale pour ajouter un nouvel auteur */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const newAuthor = {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
              };
              addAuthor(newAuthor);
            }}
            className={styles.modalContent}
          >
            <h2 className={styles.modalTitle}>Ajouter un Auteur</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Prénom</label>
              <input type="text" name="firstName" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nom</label>
              <input type="text" name="lastName" className={styles.input} required />
            </div>
            <button type="submit" className={styles.submitButton}>Ajouter</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

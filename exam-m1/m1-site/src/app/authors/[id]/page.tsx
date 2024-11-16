'use client';

import { useEffect, useState } from 'react';
import styles from './AuthorDetails.module.css';
import api from '../../services/api';

interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export default function AuthorDetails({ params }: { params: { id: string } }) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchAuthor = async () => {
      console.log('Fetching author with ID:', params.id); // Log de l'ID de l'auteur
  
      try {
        const response = await api.get(`/authors/${params.id}`);
        console.log('API response:', response); // Afficher la réponse pour débogage
        if (response.data) {
          setAuthor(response.data);
        } else {
          setError('Auteur non trouvé.');
        }
      } catch (error: any) {
        console.error('Erreur lors de la récupération des détails de l\'auteur:', error);
        if (error.response) {
          setError(`Erreur: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
        } else {
          setError('Erreur de récupération.');
        }
      }
    };
  
    fetchAuthor();
  }, [params.id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/authors/${params.id}`);
      // Redirection manuelle après la suppression
      window.location.href = '/authors';
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'auteur:', error);
    }
  };

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
        <a href="/authors" className={`${styles.button} ${styles.return}`}>
          Retour à la liste des auteurs
        </a>
      </div>
    );
  }

  if (!author) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Chargement des détails de l'auteur...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{author.firstName} {author.lastName}</h1>

      <div className={styles.buttonContainer}>
        <button
          onClick={handleDelete}
          className={`${styles.button} ${styles.delete}`}
        >
          Supprimer cet auteur
        </button>
        <a href="/authors" className={`${styles.button} ${styles.return}`}>
          Retour à la liste des auteurs
        </a>
      </div>
    </div>
  );
}

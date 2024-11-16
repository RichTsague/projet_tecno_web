'use client';

import styles from './AuthorsPage.module.css';
import { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import api from '../services/api';

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  photo?: string;
}

interface Book {
  id: number;
  title: string;
  yearPublished: number;
  author: Author;
}

export default function Authors() {
  const [authors, setAuthors] = useState<Author[]>([]);  
  const [books, setBooks] = useState<Book[]>([]);  // Liste complète des livres
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddAuthorModalOpen, setAddAuthorModalOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [authorBooks, setAuthorBooks] = useState<Book[]>([]);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);  // Modal de confirmation de suppression
  const [authorToDelete, setAuthorToDelete] = useState<Author | null>(null); // Auteur à supprimer
  const [searchTerm, setSearchTerm] = useState(''); // État pour la barre de recherche


  useEffect(() => {
    const fetchAuthorsAndBooks = async () => {
      try {
        // Récupération des auteurs
        const authorsResponse = await api.get('/authors');
        setAuthors(authorsResponse.data);

        // Récupération de tous les livres
        const booksResponse = await api.get('/books');
        setBooks(booksResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des auteurs et des livres:", error);
      }
    };

    fetchAuthorsAndBooks();
  }, []);

  const handleAuthorClick = (author: Author) => {
    setSelectedAuthor(author);
    const filteredBooks = books.filter(book => book.author.id === author.id);
    setAuthorBooks(filteredBooks);
    setModalOpen(true);
  };

  const addAuthor = async (newAuthor: { firstName: string; lastName: string }) => {
    try {
      const response = await api.post('/authors', newAuthor);
      setAuthors([...authors, response.data]);
      setAddAuthorModalOpen(false);
      alert("Auteur ajouté avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'auteur:", error);
    }
  };

  const deleteAuthor = async (authorId: string) => {
    try {
      await api.delete(`/authors/${authorId}`);
      setAuthors(authors.filter(author => author.id !== authorId));
      setConfirmDeleteModalOpen(false);
      alert("Auteur supprimé avec succès!");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'auteur:", error);
    }
  };

  // Filtrer les auteurs en fonction de la recherche
  const filteredAuthors = authors.filter(author =>
    author.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Auteurs</h1>

      {/* Barre de recherche */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher un auteur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <button onClick={() => setAddAuthorModalOpen(true)} className={styles.addButton}>Ajouter un Auteur</button>
      
      <div className={styles.authorList}>
        {filteredAuthors.map((author) => (
          <div key={author.id} className={styles.authorCard} onClick={() => handleAuthorClick(author)}>
            <img src="/images/image.jpg" alt={`${author.firstName} ${author.lastName}`} className={styles.authorPhoto} />
            <p className={styles.authorName}>{author.firstName} {author.lastName}</p>
            <p className={styles.authorInfo}>Livres publiés : {books.filter(book => book.author.id === author.id).length}</p>
          </div>
        ))}
      </div>

      {/* Modal de détails de l'auteur */}
      {isModalOpen && selectedAuthor && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Détails de l'Auteur</h2>
            <div className={styles.modalAuthorInfo}>
              <img src="/images/image.jpg" alt={`${selectedAuthor.firstName} ${selectedAuthor.lastName}`} className={styles.modalAuthorPhoto} />
              <p><strong>Nom :</strong> {selectedAuthor.firstName} {selectedAuthor.lastName}</p>
              <p><strong>Livres publiés :</strong> {authorBooks.length}</p>
              <p><strong>Description :</strong> Cet auteur est connu pour ses œuvres inspirantes et ses contributions remarquables à la littérature. Une véritable source d'inspiration pour ses lecteurs.</p>
              <ul className={styles.booksList}>
                {authorBooks.length > 0 ? (
                  authorBooks.map((book) => (
                    <li key={book.id}>
                      <a href={`/books/${book.id}`} className={styles.bookLink}>{book.title} ({book.yearPublished})</a>
                    </li>
                  ))
                ) : (
                  <li>Aucun livre trouvé pour cet auteur.</li>
                )}
              </ul>
              <button onClick={() => {
                setAuthorToDelete(selectedAuthor);
                setConfirmDeleteModalOpen(true);
              }} className={styles.deleteButton}>Supprimer l'Auteur</button>
            </div>
            <button onClick={() => setModalOpen(false)} className={styles.closeButton}>Fermer</button>
          </div>
        </Modal>
      )}

      {/* Modal de confirmation de suppression */}
      {isConfirmDeleteModalOpen && authorToDelete && (
        <Modal isOpen={isConfirmDeleteModalOpen} onClose={() => setConfirmDeleteModalOpen(false)}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Confirmer la suppression</h2>
            <p>Êtes-vous sûr de vouloir supprimer l'auteur {authorToDelete.firstName} {authorToDelete.lastName} ?</p>
            <div className={styles.confirmDeleteButtons}>
              <button onClick={() => deleteAuthor(authorToDelete.id)} className={styles.confirmButton}>Oui</button>
              <button onClick={() => setConfirmDeleteModalOpen(false)} className={styles.cancelButton}>Non</button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal d'ajout d'auteur */}
      {isAddAuthorModalOpen && (
        <Modal isOpen={isAddAuthorModalOpen} onClose={() => setAddAuthorModalOpen(false)}>
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

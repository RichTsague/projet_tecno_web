'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '../services/api';
import AddBookPopup from '../../components/AddBookPopup';
import styles from './BooksPage.module.css';  // Import du fichier CSS module

interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

interface Book {
  id: number;
  title: string;
  yearPublished: number;
  author: Author;
  imageUrl?: string;  // Ajoutez une propriété imageUrl pour l'image du livre
}

function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [showAddBookPopup, setShowAddBookPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    };

    const fetchAuthors = async () => {
      try {
        const response = await api.get('/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des auteurs:', error);
      }
    };

    fetchBooks();
    fetchAuthors();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
      alert('Livre supprimé avec succès!');
    } catch (error) {
      console.error('Erreur lors de la suppression du livre:', error);
    }
  };

  const handleAddBook = async (title: string, yearPublished: number, authorId: string) => {
    try {
      const newBook = { title, yearPublished, authorId };
      const response = await api.post('/books', { book: newBook });
      setBooks([...books, response.data]);
      setShowAddBookPopup(false);
      alert('Livre ajouté avec succès!');
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre:", error);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${book.author.firstName} ${book.author.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.booksContainer}>
      <h1>Liste des Livres</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher un livre ou un auteur"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.addButton} onClick={() => setShowAddBookPopup(true)}>
          Ajouter un Livre
        </button>
      </div>
      
      <div className={styles.booksBoxes}>
        {filteredBooks.map((book) => (
          <div className={styles.bookBox} key={book.id}>
            <div className={styles.bookImage}>
              <img 
                src="/images/livre.jpeg"  // Image par défaut pour tous les livres
                alt={book.title} 
                className={styles.bookImg}
              />
            </div>
            <div className={styles.bookInfo}>
              {/* Le lien est maintenant stylisé comme un texte normal */}
              <Link href={`/books/${book.id}`} passHref>
                <span className={styles.bookTitle}>
                  {book.title}
                </span>
              </Link>
              <span className={styles.bookTitle}>
                  Publié en : {book.yearPublished}
              </span>
              <span className={styles.bookAuthor}>
                par {book.author.firstName} {book.author.lastName}
              </span>
            </div>
            <button className={styles.deleteButton} onClick={() => handleDelete(book.id)}>Supprimer</button>
          </div>
        ))}
      </div>

      {/* Affiche le pop-up pour ajouter un livre */}
      {showAddBookPopup && (
        <AddBookPopup
          authors={authors}
          onAddBook={handleAddBook}
          onClose={() => setShowAddBookPopup(false)}
        />
      )}
    </div>
  );
}

export default BooksPage;

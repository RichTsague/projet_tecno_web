'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '../services/api';
import AddBookPopup from '../../components/AddBookPopup';
import DeleteConfirmationPopup from '../../components/DeleteConfirmationPopup';
import styles from './BooksPage.module.css';

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
  imageUrl?: string;
}

function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [showAddBookPopup, setShowAddBookPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'year' | 'author'>('title');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to fetch books from the API
  const fetchBooks = async () => {
    try {
      const response = await api.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des livres:', error);
    }
  };

  // Fetch authors once
  useEffect(() => {
    fetchBooks();
    const fetchAuthors = async () => {
      try {
        const response = await api.get('/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des auteurs:', error);
      }
    };
    fetchAuthors();
  }, []);

  const handleConfirmAddBook = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000); // Masquer après 3 secondes
  };

  const handleDelete = async () => {
    if (bookToDelete) {
      try {
        await api.delete(`/books/${bookToDelete}`);
        setBooks(books.filter((book) => book.id !== bookToDelete));
        setShowDeletePopup(false);
      } catch (error) {
        console.error('Erreur lors de la suppression du livre:', error);
      }
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${book.author.firstName} ${book.author.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortBooks = (books: Book[]) => {
    switch (sortBy) {
      case 'title':
        return books.sort((a, b) => a.title.localeCompare(b.title));
      case 'year':
        return books.sort((a, b) => a.yearPublished - b.yearPublished);
      case 'author':
        return books.sort((a, b) =>
          `${a.author.firstName} ${a.author.lastName}`.localeCompare(`${b.author.firstName} ${b.author.lastName}`)
        );
      default:
        return books;
    }
  };

  const sortedBooks = sortBooks(filteredBooks);

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
              {/* Message de confirmation d'ajout */}
      {showConfirmation && (
        <p className={styles.confirmationMessage}>Livre ajouté avec succès !</p>
      )}
      </div>

      <div className={styles.sortContainer}>
        <label htmlFor="sortBy">Trier par :</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'title' | 'year' | 'author')}
          className={styles.sortSelect}
        >
          <option value="title">Titre</option>
          <option value="year">Année de publication</option>
          <option value="author">Auteur</option>
        </select>
      </div>
      
      <div className={styles.booksBoxes}>
        {sortedBooks.map((book) => (
          <div className={styles.bookBox} key={book.id}>
            <div className={styles.bookImage}>
              <img 
                src="/images/livre.jpeg"
                alt={book.title} 
                className={styles.bookImg}
              />
            </div>
            <div className={styles.bookInfo}>
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
            <button 
              className={styles.deleteButton} 
              onClick={() => { setBookToDelete(book.id); setShowDeletePopup(true); }}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {showAddBookPopup && (
  <AddBookPopup
    authors={authors}
    books={books}
    setBooks={setBooks}
    setShowAddBookPopup={setShowAddBookPopup}
    onAddBook={async (title, yearPublished, authorId) => {
      try {
        await api.post('/books', { title, yearPublished, authorId });
        setShowAddBookPopup(false);
        await fetchBooks(); // Actualise la liste des livres après l'ajout
        alert("Livre ajouté avec succès !"); // Affiche le message de confirmation
      } catch (error) {
        console.error("Erreur lors de l'ajout du livre:", error);
      }
    }}
    onClose={() => setShowAddBookPopup(false)}
    onConfirm={handleConfirmAddBook} // Appel de la confirmation
  />
)}

      {showDeletePopup && (
        <DeleteConfirmationPopup
          onConfirm={handleDelete}
          onCancel={() => setShowDeletePopup(false)}
        />
      )}
    </div>
  );
}

export default BooksPage;

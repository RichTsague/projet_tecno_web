'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import api from '../services/api';
import AddBookPopup from '../../components/AddBookPopup';


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

  // Filtrer les livres en fonction de la recherche
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${book.author.firstName} ${book.author.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Liste des Livres</h1>
      <input
        type="text"
        placeholder="Rechercher un livre ou un auteur"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '100%' }}
      />
      <button onClick={() => setShowAddBookPopup(true)}>Ajouter un Livre</button>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link href={`/books/${book.id}`} passHref>
              <span style={{ fontWeight: 'bold', color: '#0070f3', textDecoration: 'underline' }}>
                {book.title} ({book.yearPublished})
              </span>
            </Link>
            {' '}par {book.author.firstName} {book.author.lastName}
            <button onClick={() => handleDelete(book.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

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

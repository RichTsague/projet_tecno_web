'use client';
import { useState, useEffect } from 'react';
import api from '../services/api';
 
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
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookYear, setNewBookYear] = useState<number | ''>('');
  const [newAuthorId, setNewAuthorId] = useState<string>('');
 
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
 
  const handleAddBook = async () => {
    try {
      const newBook = {
        title: newBookTitle,
        yearPublished: newBookYear,
        authorId: newAuthorId,
      };
      const response = await api.post('/books', { book: newBook });
      setBooks([...books, response.data]);
      setShowAddBookPopup(false);
      setNewBookTitle('');
      setNewBookYear('');
      setNewAuthorId('');
      alert('Livre ajouté avec succès!');
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre:", error);
    }
  };
 
  return (
<div>
<h1>Liste des Livres</h1>
<button onClick={() => setShowAddBookPopup(true)}>Ajouter un Livre</button>
<ul>
        {books.map((book) => (
<li key={book.id}>
            {book.title} ({book.yearPublished}) par {book.author.firstName} {book.author.lastName}
<button onClick={() => handleDelete(book.id)}>Supprimer</button>
</li>
        ))}
</ul>
 
      {/* Pop-up pour ajouter un livre */}
      {showAddBookPopup && (
<div style={popupStyles.overlay}>
<div style={popupStyles.popup}>
<h2>Ajouter un Nouveau Livre</h2>
<label>
              Titre:
<input
                type="text"
                value={newBookTitle}
                onChange={(e) => setNewBookTitle(e.target.value)}
              />
</label>
<label>
              Année de publication:
<input
                type="number"
                value={newBookYear}
                onChange={(e) => setNewBookYear(Number(e.target.value))}
              />
</label>
<label>
              Auteur:
<select
                value={newAuthorId}
                onChange={(e) => setNewAuthorId(e.target.value)}
>
<option value="">Sélectionner un auteur</option>
                {authors.map((author) => (
<option key={author.id} value={author.id}>
                    {author.firstName} {author.lastName}
</option>
                ))}
</select>
</label>
<button onClick={handleAddBook}>Ajouter</button>
<button onClick={() => setShowAddBookPopup(false)}>Annuler</button>
</div>
</div>
      )}
</div>
  );
}
 
export default BooksPage;
 
const popupStyles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
};
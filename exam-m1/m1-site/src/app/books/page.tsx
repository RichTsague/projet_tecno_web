'use client';
import { useState, useEffect } from 'react';
import api from '../services/api';
 
interface Author {
  firstName: string;
  lastName: string;
}
 
interface Book {
  id: number;
  title: string;
  author: Author;
}
 
function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [showAddBookPopup, setShowAddBookPopup] = useState(false); // état pour la pop-up
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newAuthorFirstName, setNewAuthorFirstName] = useState('');
  const [newAuthorLastName, setNewAuthorLastName] = useState('');
 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    };
 
    fetchBooks();
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
        author: {
          firstName: newAuthorFirstName,
          lastName: newAuthorLastName,
        },
      };
      const response = await api.post('/books', { book: newBook });
      setBooks([...books, response.data]);
      setShowAddBookPopup(false); // Ferme la pop-up après l'ajout
      setNewBookTitle('');
      setNewAuthorFirstName('');
      setNewAuthorLastName('');
      alert('Livre ajouté avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre:', error);
    }
  };
 
  return (
<div>
<h1>Liste des Livres</h1>
<button onClick={() => setShowAddBookPopup(true)}>Ajouter un Livre</button> {/* Bouton pour ouvrir la pop-up */}
<ul>
        {books.map((book) => (
<li key={book.id}>
            {book.title} par {book.author.firstName} {book.author.lastName}
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
              Prénom de l'Auteur:
<input
                type="text"
                value={newAuthorFirstName}
                onChange={(e) => setNewAuthorFirstName(e.target.value)}
              />
</label>
<label>
              Nom de l'Auteur:
<input
                type="text"
                value={newAuthorLastName}
                onChange={(e) => setNewAuthorLastName(e.target.value)}
              />
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
 
// Styles pour la pop-up
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
import { useState } from 'react';
import api from '../app/services/api';

interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

interface AddBookPopupProps {
  authors: Author[];
  onAddBook: (title: string, yearPublished: number, authorId: string) => void;
  onClose: () => void;
  setBooks: React.Dispatch<React.SetStateAction<any[]>>;
  books: any[];
  setShowAddBookPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void; 
}

export default function AddBookPopup({
  authors,
  onAddBook,
  onClose,
  onConfirm, // Utilisation de la prop de confirmation
  setBooks,
  books,
  setShowAddBookPopup,
}: AddBookPopupProps) {
  const [title, setTitle] = useState('');
  const [yearPublished, setYearPublished] = useState<number | ''>('');
  const [authorId, setAuthorId] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddBook = async () => {
    if (!title || !yearPublished || !authorId) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const year = Number(yearPublished);
    if (isNaN(year) || year <= 0) {
      alert('Veuillez entrer une année valide.');
      return;
    }

    try {
      const newBook = { title, yearPublished: year, authorId };
      const response = await api.post('/books', { book: newBook });
      setBooks([...books, response.data]);
      setShowAddBookPopup(false);
      setTitle('');
      setYearPublished('');
      setAuthorId('');

      // Afficher le pop-up de confirmation
      setShowConfirmation(true);
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre:", error);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    onConfirm(); 
    onClose();
  };

  return (
    <>
      <div style={popupStyles.overlay}>
        <div style={popupStyles.popup}>
          <h2>Ajouter un Nouveau Livre</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleAddBook(); }}>
            <label>
              Titre:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label>
              Année de publication:
              <input
                type="number"
                value={yearPublished}
                onChange={(e) => setYearPublished(e.target.value === '' ? '' : Number(e.target.value))}
                required
              />
            </label>
            <label>
              Auteur:
              <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} required>
                <option value="">Sélectionner un auteur</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.firstName} {author.lastName}
                  </option>
                ))}
              </select>
            </label>
            <div>
              <button type="submit">Ajouter</button>
              <button type="button" onClick={onClose}>Annuler</button>
            </div>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationPopup message="Livre ajouté avec succès!" onClose={closeConfirmation} />
      )}
    </>
  );
}

function ConfirmationPopup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.confirmationPopup}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

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
  confirmationPopup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '250px',
    textAlign: 'center' as 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
};

import { useState } from 'react';

interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

interface AddBookPopupProps {
  authors: Author[];
  onAddBook: (title: string, yearPublished: number, authorId: string) => void;
  onClose: () => void;
}

export default function AddBookPopup({ authors, onAddBook, onClose }: AddBookPopupProps) {
  const [title, setTitle] = useState('');
  const [yearPublished, setYearPublished] = useState<number | ''>('');
  const [authorId, setAuthorId] = useState('');

  const handleAdd = () => {
    if (title && yearPublished && authorId) {
      onAddBook(title, Number(yearPublished), authorId);
      setTitle('');
      setYearPublished('');
      setAuthorId('');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.popup}>
        <h2>Ajouter un Nouveau Livre</h2>
        <label>
          Titre:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Année de publication:
          <input
            type="number"
            value={yearPublished}
            onChange={(e) => setYearPublished(Number(e.target.value))}
          />
        </label>
        <label>
          Auteur:
          <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
            <option value="">Sélectionner un auteur</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.firstName} {author.lastName}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleAdd}>Ajouter</button>
        <button onClick={onClose}>Annuler</button>
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
};

'use client';

import { useState } from 'react';
import AuthorList from '../../components/AuthorList';
import Modal from '../../components/Modal';

export default function Authors() {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: 'Victor Hugo',
      photo: 'https://via.placeholder.com/100',
      booksCount: 5,
      averageRating: 4.8,
    },
    {
      id: 2,
      name: 'Albert Camus',
      photo: 'https://via.placeholder.com/100',
      booksCount: 3,
      averageRating: 4.5,
    },
    {
      id: 3,
      name: 'Honoré de Balzac',
      photo: 'https://via.placeholder.com/100',
      booksCount: 7,
      averageRating: 4.6,
    },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addAuthor = (author: {
    name: string;
    photo: string;
    booksCount: number;
    averageRating: number;
  }) => {
    setAuthors([...authors, { id: authors.length + 1, ...author }]);
    setModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Liste des Auteurs</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 bg-green-500 text-white p-2 rounded"
      >
        Ajouter un Auteur
      </button>
      <AuthorList authors={authors} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const newAuthor = {
              name: formData.get('name') as string,
              photo: formData.get('photo') as string,
              booksCount: parseInt(formData.get('booksCount') as string),
              averageRating: parseFloat(formData.get('averageRating') as string),
            };
            addAuthor(newAuthor);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">URL de la photo</label>
            <input
              type="text"
              name="photo"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Nombre de livres</label>
            <input
              type="number"
              name="booksCount"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Note moyenne</label>
            <input
              type="number"
              step="0.1"
              name="averageRating"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Ajouter
          </button>
        </form>
      </Modal>
    </div>
  );
}

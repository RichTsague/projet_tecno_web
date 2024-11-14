'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import EditAuthorForm from '../../../components/EditAuthorForm';
import ConfirmModal from '../../../components/ConfirmModal';
import Modal from '../../../components/Modal';

export default function AuthorDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: 'Victor Hugo',
      bio: 'Victor Hugo était un poète, romancier et dramaturge français.',
      photo: 'https://via.placeholder.com/150',
      books: ['Les Misérables', 'Notre-Dame de Paris'],
    },
    {
      id: 2,
      name: 'Albert Camus',
      bio: 'Albert Camus était un philosophe, écrivain et journaliste français.',
      photo: 'https://via.placeholder.com/150',
      books: ['L’Étranger', 'La Peste'],
    },
    {
      id: 3,
      name: 'Honoré de Balzac',
      bio: 'Honoré de Balzac était un romancier français.',
      photo: 'https://via.placeholder.com/150',
      books: ['Le Père Goriot', 'Eugénie Grandet'],
    },
  ]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const author = authors.find((a) => a.id === parseInt(params.id));

  if (!author) {
    return <div>Auteur non trouvé.</div>;
  }

  const handleUpdate = (updatedAuthor: {
    id: number;
    name: string;
    photo: string;
    bio: string;
  }) => {
    setAuthors(
      authors.map((a) => (a.id === updatedAuthor.id ? updatedAuthor : a))
    );
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    setAuthors(authors.filter((a) => a.id !== author.id));
    setDeleteModalOpen(false);
    router.push('/authors');
  };

  return (
    <div className="p-6">
      <div className="flex items-center space-x-4">
        <img
          src={author.photo}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold">{author.name}</h1>
      </div>
      <p className="mt-4 text-gray-700">{author.bio}</p>
      <h2 className="mt-6 text-2xl font-bold">Livres écrits</h2>
      <ul className="mt-4 list-disc list-inside">
        {author.books?.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={() => setEditModalOpen(true)}
          className="bg-yellow-500 text-white py-2 px-4 rounded"
        >
          Modifier
        </button>
        <button
          onClick={() => setDeleteModalOpen(true)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Supprimer
        </button>
      </div>

      {/* Modale de modification */}
      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <EditAuthorForm
          author={author}
          onSubmit={handleUpdate}
          onClose={() => setEditModalOpen(false)}
        />
      </Modal>

      {/* Modale de confirmation */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        message={`Êtes-vous sûr de vouloir supprimer ${author.name} ?`}
      />
    </div>
  );
}

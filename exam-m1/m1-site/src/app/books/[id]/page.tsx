'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ConfirmModal from '../../../components/ConfirmModal';

export default function BookDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [books, setBooks] = useState([
    { id: 1, title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942 },
    { id: 3, title: 'Le Père Goriot', author: 'Honoré de Balzac', year: 1835 },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return <div>Livre non trouvé.</div>;
  }

  const handleDelete = () => {
    const updatedBooks = books.filter((b) => b.id !== book.id);
    setBooks(updatedBooks);
    router.push('/books');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p>
        <strong>Auteur : </strong>
        {book.author}
      </p>
      <p>
        <strong>Année : </strong>
        {book.year}
      </p>

      {/* Conteneur pour les boutons */}
      <div className="mt-6 flex flex-col space-y-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Supprimer ce livre
        </button>
        <a
          href="/books"
          className="bg-blue-500 text-white py-2 px-4 rounded text-center"
        >
          Retour à la liste des livres
        </a>
      </div>

      {/* Modale de confirmation */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
        message="Êtes-vous sûr de vouloir supprimer ce livre ?"
      />
    </div>
  );
}

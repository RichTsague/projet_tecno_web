'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [books] = useState([
    { id: 1, title: 'Les Misérables', author: 'Victor Hugo', rating: 4.8 },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', rating: 4.5 },
    { id: 3, title: 'Le Père Goriot', author: 'Honoré de Balzac', rating: 4.6 },
  ]);

  const [authors] = useState([
    { id: 1, name: 'Victor Hugo' },
    { id: 2, name: 'Albert Camus' },
    { id: 3, name: 'Honoré de Balzac' },
  ]);

  const totalBooks = books.length;
  const totalAuthors = authors.length;
  const averageRating =
    books.length > 0
      ? (books.reduce((sum, b) => sum + b.rating, 0) / books.length).toFixed(1)
      : 'N/A';

  const topBooks = books
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord</h1>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border border-gray-300 rounded text-center">
          <h2 className="text-xl font-bold">Livres</h2>
          <p className="text-2xl font-bold">{totalBooks}</p>
          <Link href="/books" className="text-blue-500 hover:underline">
            Voir tous les livres
          </Link>
        </div>
        <div className="p-4 border border-gray-300 rounded text-center">
          <h2 className="text-xl font-bold">Auteurs</h2>
          <p className="text-2xl font-bold">{totalAuthors}</p>
          <Link href="/authors" className="text-blue-500 hover:underline">
            Voir tous les auteurs
          </Link>
        </div>
        <div className="p-4 border border-gray-300 rounded text-center">
          <h2 className="text-xl font-bold">Note Moyenne</h2>
          <p className="text-2xl font-bold">{averageRating} / 5</p>
        </div>
      </div>

      {/* Top 3 des livres */}
      <h2 className="text-2xl font-bold mb-4">Top 3 des Livres</h2>
      <ul className="space-y-4">
        {topBooks.map((book) => (
          <li key={book.id} className="p-4 border border-gray-300 rounded">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>Auteur : {book.author}</p>
            <p>Note : {book.rating} / 5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

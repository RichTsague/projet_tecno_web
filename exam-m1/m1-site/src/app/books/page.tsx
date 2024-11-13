'use client';

import { useState } from 'react';
import BookList from '../../components/BookList';
import SearchBar from '../../components/SearchBar';
import SortDropdown from '../../components/SortDropdown';
import Modal from '../../components/Modal';
import CreateBookForm from '../../components/CreateBookForm';


export default function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942 },
  ]);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const addBook = (book: { title: string; author: string; year: number }) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
    setModalOpen(false);
  };

  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'title') return a.title.localeCompare(b.title);
      if (sort === 'year') return a.year - b.year;
      if (sort === 'author') return a.author.localeCompare(b.author);
      return 0;
    });

  return (
    <div>
        
      <h1 className="text-3xl font-bold mb-4">Liste des Livres</h1>
      <button
        className="mb-4 bg-green-500 text-white p-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Ajouter un Livre
      </button>
      <SearchBar onSearch={setQuery} />
      <SortDropdown onSort={setSort} />
      <BookList books={filteredBooks} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <CreateBookForm onSubmit={addBook} />
      </Modal>
    </div>
  );
}

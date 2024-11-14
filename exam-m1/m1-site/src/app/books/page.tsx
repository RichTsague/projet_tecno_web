'use client';

import styles from './BooksPage.module.css'; // Import du CSS
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
    <div className={styles.container}>
      <h1 className={styles.title}>Liste des Livres</h1>
      <div className={styles.toolbar}>
        <button
          className={styles.addButton}
          onClick={() => setModalOpen(true)}
        >
          Ajouter un Livre
        </button>
        <div className={styles.searchBar}>
          <SearchBar onSearch={setQuery} />
        </div>
        <SortDropdown className={styles.sortDropdown} onSort={setSort} />
      </div>
      <div className={styles.bookList}>
        <BookList books={filteredBooks} />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <h2>Ajouter un Nouveau Livre</h2>
          <CreateBookForm onSubmit={addBook} />
        </div>
      </Modal>
    </div>
  );
}

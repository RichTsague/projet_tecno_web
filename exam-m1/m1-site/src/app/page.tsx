'use client';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold mb-4">Bienvenue à la Bibliothèque</h1>
      <p className="text-gray-700">Gérez vos livres et auteurs facilement.</p>
      <a href="/authors" className="button">Auteurs</a>

      <a href="/books" className="button">Livres</a>
    </div>
  );
}

export default Home;

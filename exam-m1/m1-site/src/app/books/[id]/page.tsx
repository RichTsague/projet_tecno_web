'use client';
export default function BookDetails({ params }: { params: { id: string } }) {
    const books = [
      { id: 1, title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
      { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942 },
      { id: 3, title: 'Le Père Goriot', author: 'Honoré de Balzac', year: 1835 },
    ];
  
    // Trouver le livre correspondant à l'ID
    const book = books.find((b) => b.id === parseInt(params.id));
  
    if (!book) {
      return <div>Livre non trouvé.</div>;
    }
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p>
          <strong>Auteur : </strong>
          {book.author}
        </p>
        <p>
          <strong>Année : </strong>
          {book.year}
        </p>
        <a href="/books" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">
          Retour à la liste des livres
        </a>
      </div>
    );
  }
  
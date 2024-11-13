interface Book {
    id: number;
    title: string;
    author: string;
    year: number;
  }
  
  interface BookListProps {
    books: Book[];
  }
  
  export default function BookList({ books }: BookListProps) {
    return (
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="p-4 border border-gray-300 rounded">
            <div>
              <strong className="text-lg">{book.title}</strong>
              <span className="text-gray-500"> ({book.year})</span>
            </div>
            <div className="text-gray-600">Auteur : {book.author}</div>
          </li>
        ))}
      </ul>
    );
  }
  
'use client';

interface Author {
  id: number;
  name: string;
  photo: string;
  booksCount: number;
  averageRating: number;
}

interface AuthorListProps {
  authors: Author[];
}

export default function AuthorList({ authors }: AuthorListProps) {
  return (
    <ul className="space-y-4">
      {authors.map((author) => (
        <li
          key={author.id}
          className="p-4 border border-gray-300 rounded flex items-center space-x-4"
        >
          <img
            src={author.photo}
            alt={author.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{author.name}</h2>
            <p>{author.booksCount} livres écrits</p>
            <p>Note moyenne : {author.averageRating.toFixed(1)} / 5</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

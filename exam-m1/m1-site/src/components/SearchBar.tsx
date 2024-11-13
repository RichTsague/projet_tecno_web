interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
      <input
        type="text"
        placeholder="Rechercher un livre..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
    );
  }
  
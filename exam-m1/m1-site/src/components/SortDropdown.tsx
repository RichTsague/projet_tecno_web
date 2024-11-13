'use client';

interface SortDropdownProps {
  onSort: (criteria: string) => void;
}

export default function SortDropdown({ onSort }: SortDropdownProps) {
  return (
    <select
      onChange={(e) => onSort(e.target.value)}
      className="p-2 border border-gray-300 rounded mb-4"
    >
      <option value="">Trier par</option>
      <option value="title">Titre</option>
      <option value="year">Année</option>
      <option value="author">Auteur</option>
    </select>
  );
}

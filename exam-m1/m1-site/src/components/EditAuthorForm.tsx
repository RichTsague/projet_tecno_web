'use client';

import { useState } from 'react';

interface EditAuthorFormProps {
  author: {
    id: number;
    name: string;
    photo: string;
    bio: string;
  };
  onSubmit: (updatedAuthor: {
    id: number;
    name: string;
    photo: string;
    bio: string;
  }) => void;
  onClose: () => void;
}

export default function EditAuthorForm({
  author,
  onSubmit,
  onClose,
}: EditAuthorFormProps) {
  const [name, setName] = useState(author.name);
  const [photo, setPhoto] = useState(author.photo);
  const [bio, setBio] = useState(author.bio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ id: author.id, name, photo, bio });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">URL de la photo</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Biographie</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Enregistrer
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-black py-2 px-4 rounded"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

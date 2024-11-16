export type AuthorModel = {
  id: string;
  firstName: string;
  lastName: string;
};

export type CreateAuthorModel = {
  firstName: string;
  lastName: string;
};

/**
 * Permet de définir les champs modifiables lors de la mise à jour d'un auteur.
 * Tous les champs sont optionnels pour des mises à jour partielles.
 */
export type UpdateAuthorModel = Partial<Pick<AuthorModel, 'firstName' | 'lastName'>>;
export type AuthorModel = {
    id: string;
    firstName: string;
    lastName: string;
};
export type CreateAuthorModel = {
    firstName: string;
    lastName: string;
};
export type UpdateAuthorModel = Partial<Pick<AuthorModel, 'firstName' | 'lastName'>>;

import { AuthorModel } from './author.model';
export declare class AuthorPresenter {
    id: string;
    firstName: string;
    lastName: string;
    private constructor();
    static from(author: AuthorModel): AuthorPresenter;
}

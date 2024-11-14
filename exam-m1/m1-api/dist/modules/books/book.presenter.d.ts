import { AuthorPresenter } from '../authors/author.presenter';
import { BookModel } from './book.model';
export declare class BookPresenter {
    id: string;
    title: string;
    author: AuthorPresenter;
    private constructor();
    static from(data: BookModel): BookPresenter;
}

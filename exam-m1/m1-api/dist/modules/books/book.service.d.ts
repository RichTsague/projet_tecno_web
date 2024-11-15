import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { BookRepository } from './book.repository';
import { BookId } from '../database/entities/book.entity';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    listBooks(): Promise<BookModel[]>;
    getBookById(id: BookId): Promise<BookModel | undefined>;
    updateBook(id: BookId, input: UpdateBookModel): unknown;
    createBook(input: CreateBookModel): Promise<BookModel>;
    deleteBook(id: BookId): unknown;
}

import { DataSource } from 'typeorm';
import { BookId } from '../database/entities/book.entity';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
export declare class BookRepository {
    private readonly dataSource;
    private readonly authorRepository;
    private readonly bookRepository;
    constructor(dataSource: DataSource);
    listBooks(): Promise<BookModel[]>;
    getBookById(id: BookId): Promise<BookModel | undefined>;
    updateBook(id: BookId, input: UpdateBookModel): Promise<void>;
    createBook(input: CreateBookModel): Promise<BookModel>;
    deleteBook(id: BookId): Promise<void>;
}

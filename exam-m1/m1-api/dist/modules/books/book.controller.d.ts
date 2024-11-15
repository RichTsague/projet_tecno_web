import { CreateBooksDto, GetBooksDto, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';
import { BookId } from '../database/entities/book.entity';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(input: GetBooksDto): unknown;
    getBookById(id: BookId): unknown;
    createBook(input: CreateBooksDto): unknown;
    updateBook(id: BookId, input: UpdateBookDto): unknown;
    deleteBook(id: BookId): unknown;
}

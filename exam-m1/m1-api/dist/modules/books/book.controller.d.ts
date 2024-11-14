import { CreateBooksDto, GetBooksDto, UpdateBookDto } from './book.dto';
import { BookService } from './book.service';
import { BookPresenter } from './book.presenter';
import { BookId } from '../database/entities/book.entity';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(input: GetBooksDto): Promise<import("./book.model").BookModel[]>;
    getBookById(id: BookId): Promise<BookPresenter>;
    createBook(input: CreateBooksDto): Promise<import("./book.model").BookModel | import("./book.model").BookModel[]>;
    updateBook(id: BookId, input: UpdateBookDto): Promise<void>;
    deleteBook(id: BookId): Promise<void>;
}

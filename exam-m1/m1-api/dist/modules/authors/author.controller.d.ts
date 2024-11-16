import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    listAuthors(): Promise<AuthorPresenter[]>;
    createAuthor(input: CreateAuthorDto): Promise<AuthorPresenter>;
    getAuthorById(authorId: string): Promise<AuthorPresenter>;
    updateAuthor(authorId: string, input: UpdateAuthorDto): Promise<AuthorPresenter>;
    deleteAuthor(authorId: string): Promise<void>;
}

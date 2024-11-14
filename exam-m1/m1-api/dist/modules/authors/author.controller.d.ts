import { AuthorService } from './author.service';
import { CreateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    listAuthors(): Promise<AuthorPresenter[]>;
    createAuthor(input: CreateAuthorDto): Promise<AuthorPresenter>;
}

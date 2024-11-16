import { AuthorRepository } from './author.repository';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { UpdateAuthorDto } from './author.dto';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: AuthorRepository);
    listAuthors(): Promise<AuthorModel[]>;
    createAuthor(input: CreateAuthorModel): Promise<AuthorModel>;
    getAuthorById(authorId: string): Promise<AuthorModel>;
    updateAuthor(authorId: string, input: UpdateAuthorDto): Promise<AuthorModel>;
    deleteAuthor(authorId: string): Promise<void>;
}

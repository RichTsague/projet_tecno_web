import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorRepository } from './author.repository';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: AuthorRepository);
    listAuthors(): Promise<AuthorModel[]>;
    createAuthor(input: CreateAuthorModel): Promise<AuthorModel>;
}

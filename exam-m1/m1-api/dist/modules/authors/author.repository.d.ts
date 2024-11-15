import { DataSource } from 'typeorm';
import { AuthorModel, CreateAuthorModel } from './author.model';
export declare class AuthorRepository {
    private readonly dataSource;
    private readonly authorRepository;
    constructor(dataSource: DataSource);
    listAuthors(): Promise<AuthorModel[]>;
    createAuthor(input: CreateAuthorModel): Promise<AuthorModel>;
}

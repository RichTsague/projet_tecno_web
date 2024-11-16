import { DataSource } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { UpdateAuthorDto } from './author.dto';
export declare class AuthorRepository {
    private readonly dataSource;
    private readonly authorRepository;
    constructor(dataSource: DataSource);
    listAuthors(): Promise<AuthorModel[]>;
    createAuthor(input: CreateAuthorModel): Promise<AuthorModel>;
    save(author: AuthorEntity): Promise<AuthorEntity>;
    findById(authorId: string): Promise<AuthorModel | null>;
    updateAuthor(authorId: string, input: UpdateAuthorDto): Promise<AuthorModel>;
    deleteAuthor(authorId: string): Promise<void>;
}

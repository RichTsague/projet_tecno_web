import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorEntity } from '../database/entities/author.entity';
import { UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.listAuthors();
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  // Nouvelle méthode pour obtenir un auteur par ID
  public async getAuthorById(authorId: string): Promise<AuthorModel> {
    const author = await this.authorRepository.findById(authorId);

    if (!author) {
      throw new NotFoundException(`Auteur avec ID ${authorId} non trouvé`);
    }

    return author;
  }

  public async updateAuthor(
    authorId: string,
    input: UpdateAuthorDto,
  ): Promise<AuthorModel> {
    return this.authorRepository.updateAuthor(authorId, input);
  }

  public async deleteAuthor(authorId: string): Promise<void> {
    await this.authorRepository.deleteAuthor(authorId);
  }
}

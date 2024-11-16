import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { UpdateAuthorDto } from './author.dto';

@Injectable()
export class AuthorRepository {
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async listAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    const result = await this.authorRepository.save(
      this.authorRepository.create(input),
    );
    return result;
  }

  public async save(author: AuthorEntity): Promise<AuthorEntity> {
    // Utilisation de la méthode save pour insérer ou mettre à jour l'auteur
    return this.authorRepository.save(author);
  }
  
  // Nouvelle méthode pour récupérer un auteur par ID
  public async findById(authorId: string): Promise<AuthorModel | null> {
    return this.authorRepository.findOne({ where: { id: authorId } });
  }

  public async updateAuthor(
    authorId: string,
    input: UpdateAuthorDto,
  ): Promise<AuthorModel> {
    // Mettez à jour l'auteur ici (par exemple, avec `this.authorRepository.update`)
    return this.authorRepository.save(input); // Exemple simplifié
  }

  public async deleteAuthor(authorId: string): Promise<void> {
    await this.authorRepository.delete(authorId);
  }
}

import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter } from './author.presenter';

@Controller('/authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  public async listAuthors(): Promise<AuthorPresenter[]> {
    const authors = await this.authorService.listAuthors();
    return authors.map(AuthorPresenter.from);
  }

  @Post()
  public async createAuthor(
    @Body() input: CreateAuthorDto,
  ): Promise<AuthorPresenter> {
    const author = await this.authorService.createAuthor(input);
    return AuthorPresenter.from(author);
  }

  // Route GET pour récupérer un auteur par ID
  @Get(':id')
  public async getAuthorById(
    @Param('id') authorId: string, // Récupère l'ID depuis l'URL
  ): Promise<AuthorPresenter> {
    const author = await this.authorService.getAuthorById(authorId);
    return AuthorPresenter.from(author);
  }

  @Patch(':id')
  public async updateAuthor(
    @Param('id') authorId: string,
    @Body() input: UpdateAuthorDto,
  ): Promise<AuthorPresenter> {
    const updatedAuthor = await this.authorService.updateAuthor(authorId, input);
    return AuthorPresenter.from(updatedAuthor);
  }

  @Delete(':id')
  public async deleteAuthor(@Param('id') authorId: string): Promise<void> {
    await this.authorService.deleteAuthor(authorId);
  }
}

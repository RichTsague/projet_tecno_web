import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './authors/authors.controller';
import { BooksService } from './books/books.service';
import { AuthorsService } from './authors/authors.service';

@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule],
  controllers: [AppController, BooksController, AuthorsController],
  providers: [AppService, BooksService, AuthorsService],
})
export class AppModule {}

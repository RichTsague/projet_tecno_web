export declare class CreateBookAuthorDto {
    firstName: string;
    lastName: string;
}
export declare class CreateBookDto {
    title: string;
    yearPublished: number;
    authorId: string;
}
export declare class CreateBooksDto {
    book?: CreateBookDto;
    books?: CreateBookDto[];
}
export declare class UpdateBookDto {
    title: string;
    yearPublished: number;
    author: CreateBookAuthorDto;
}
export declare class GetBooksDto {
    name: string;
}

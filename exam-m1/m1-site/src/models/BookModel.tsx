export type BookModel = {
  id: string
  yearPublished: number
  title: string
}

export type CreateBookModel = {
  title: string
  yearPublished: number
  authorId: string
}
'use client'
import { useEffect } from "react"
import { BookListItem } from "../../components/BookListItem"
import { CreateBookForm } from "../../components/CreateBookForm"
import { useListBookProviders } from "../../providers/useBookProviders"
import { GlobalLayout } from "../GlobalLayout"

const BooksPage = () => {
  const { loadBooks, books, onCreate, onUpdate, onDelete } = useListBookProviders()

  useEffect(() => {
    loadBooks()
  }, [])

  return (
    <GlobalLayout>
      <>
        Books page
        <CreateBookForm onCreate={onCreate} />
        {books.map((book) => <BookListItem book={book} onDelete={onDelete} onUpdate={onUpdate} />)}
      </>
    </GlobalLayout>)
}

export default BooksPage
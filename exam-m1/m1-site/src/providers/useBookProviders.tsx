import axios from "axios"
import { BookModel, CreateBookModel } from "../models/BookModel"
import { useState } from "react"

export const useListBookProviders = () => {
  const [books, setBooks] = useState<BookModel[]>([])

  const loadBooks = () => {
    axios.get<BookModel[]>('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }

  const onDelete = (id: string) => {
    axios.delete(`http://localhost:3001/books/${id}`).then(() => {
      setBooks((prev) => prev.filter(book => book.id !== id))
    }).catch((error) => {
      console.error(error)
    })
  }

  const onUpdate = (id: string, title: string) => {
    axios.patch(`http://localhost:3001/books/${id}`, { title }).then(() => {
      setBooks((prev) => prev.map(book => book.id === id ? { ...book, title } : book))
    }).catch((error) => {
      console.error(error)
    })
  }

  const onCreate = (input: CreateBookModel) => {
    axios.post('http://localhost:3001/books', { book: input }).then(() => {
      loadBooks()
    }).catch((error) => {
      console.error(error)
    })
  }

  return {
    books,
    onCreate,
    loadBooks,
    onUpdate,
    onDelete
  }
}

export const useGetBookProvider = (id: string) => {
  const [book, setBook] = useState<BookModel | null>(null)
  
  const loadBook = () => {
    axios.get<BookModel>(`http://localhost:3001/books/${id}`)
      .then((result) => setBook(result.data))
      .catch((err) => console.error(err))
  }

  const onUpdate = (id: string, title: string) => {
    axios.patch(`http://localhost:3001/books/${id}`, { title }).then(() => {
      setBook({ ...book!, title })
    }).catch((error) => {
      console.error(error)
    })
  }

  return { book, loadBook, onUpdate }
}
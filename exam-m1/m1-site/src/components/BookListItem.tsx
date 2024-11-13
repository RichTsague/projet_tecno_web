import { FC, useState } from "react"
import { BookModel } from "../models/BookModel"
import { Button } from "./Button"
import { useRouter } from "next/navigation"

type Props = {
  book: BookModel
  onDelete: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export const BookListItem: FC<Props> = ({ book, onDelete, onUpdate }) => {
  const router = useRouter()
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(book.title)


  return <div>
    - {editMode ? (
        <div style={{margin: '0 1rem'}}>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <Button onClick={() => {setEditMode(false); setNewTitle(book.title)} }>Cancel</Button>
          <Button onClick={() => {onUpdate(book.id, newTitle); setEditMode(false)}}>Ok</Button>
        </div>) : book.title}
        <Button onClick={() => router.push(`/books/${book.id}`)} >Details</Button>
        <Button onClick={() => setEditMode(true)} >Update</Button>
        <Button onClick={() => onDelete(book.id)} >Delete</Button>
    <br/>
  </div>
}
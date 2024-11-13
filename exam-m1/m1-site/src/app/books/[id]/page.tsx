'use client'
import { FC, useEffect, useState } from "react";
import { GlobalLayout } from "../../GlobalLayout";
import { useGetBookProvider } from "../../../providers/useBookProviders";
import { useParams } from "next/navigation";
import { Button } from "../../../components/Button";

const BooksPage: FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>('')

  const { id } = useParams()  
  const { book, loadBook, onUpdate } = useGetBookProvider(id as string)

  const onOk = () => {
    if (book) {
      onUpdate(book.id, newTitle);
      setEditMode(false)
    }
  }
  useEffect(() => {
    loadBook()
  }, [])
  
  return (
    <GlobalLayout>
      <>
        Books page
        {editMode ? 
          <>
            <Button onClick={() => setEditMode(false)}>Cancel</Button>
            <Button onClick={onOk}>Ok</Button>
            </> : 
          <Button onClick={() => setEditMode(true)}>Update</Button>}
      </>
      {book ? (
        <>
          <br/>
          {editMode ? 
            <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/> : 
            <span>Title: {book.title}</span>
          }
          <br/>
          <span>Year published: {book.yearPublished}</span>
        </>) : <></>}
    </GlobalLayout>
  )
}

export default BooksPage
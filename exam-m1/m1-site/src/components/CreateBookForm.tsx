import { FC, useState } from "react"
import { CreateBookModel } from "../models/BookModel"
import { Button } from "./Button"
import { Modal } from "./Modal"

type Props = {
  onCreate: (book: CreateBookModel) => void
}

export const CreateBookForm: FC<Props> = ({ onCreate }) => {
  const [newBookName, setNewBookName] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const onCancel = () => {
    setIsModalOpen(false)
    setNewBookName('')
  }

  const onOk = () => {
    onCreate({ title: newBookName, yearPublished: 2000, authorId: '9bef29d9-895b-4200-b70d-ea04be03c364' })
    onCancel()
  }

  return (
  <div>
    <Button onClick={() => setIsModalOpen(true)}>Create book</Button>
    <Modal
      isOpen={isModalOpen}
      title="Create a new book"
      onCancel={onCancel}
      onClose={onCancel}
      onOk={onOk}
      >
      <p>Book name: </p>
      <input value={newBookName} onChange={(e) => setNewBookName(e.target.value)} />
    </Modal>
  </div>)
}
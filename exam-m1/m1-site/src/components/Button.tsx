import { FC } from "react"

type Props = {
  children: string
  onClick: () => void
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return <span className="p-1 m-2 cursor-pointer bg-blue-200 rounded" onClick={onClick}>{children}</span>
}



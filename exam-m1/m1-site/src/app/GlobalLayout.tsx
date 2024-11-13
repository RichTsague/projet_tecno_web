'use client'
import { useRouter } from "next/navigation"
import { FC, ReactElement } from "react"
import './GlobalLayout.css'
import { Button } from "../components/Button"
import Navbar from "../components/Navbar/Navbar"

type Props = {
  children: ReactElement | ReactElement[]
}

export const GlobalLayout: FC<Props> = ({ children }) => {
  const router = useRouter()

  return <>
    <div className="bg-slate-50">
      <Navbar />
    </div>
    <div className="absolute bg-slate-100 h-full w-full">
      {children}
    </div>
  </>
}
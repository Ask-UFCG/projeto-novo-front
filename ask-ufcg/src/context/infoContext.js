import { createContext, useContext, useState } from 'react'
const InfoContext = createContext()
export default function InfoProvider({ children }) {
  const [titlePage, setTitlePage] = useState('')
  const title = { titlePage, setTitlePage }
  return <InfoContext.Provider value={title}>{children}</InfoContext.Provider>
}

export function useInfo() {
  const [title, setTitle] = useContext(InfoContext)
  return [title, setTitle]
}

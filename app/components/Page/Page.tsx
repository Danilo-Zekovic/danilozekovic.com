import { ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div className="container mx-auto flex flex-col items-start justify-between px-4 py-3 max-w-[800px] mb-14">
      {children}
    </div>
  )
}

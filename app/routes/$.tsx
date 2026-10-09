import { createFileRoute, Link } from '@tanstack/react-router'
import { Rabbit } from 'lucide-react'

export const Route = createFileRoute('/$')({
  head: () => ({
    meta: [
      { title: '404 | Danilo Zeković' },
      {
        name: 'description',
        content: '404 Page not found',
      },
    ],
  }),
  component: NotFound,
})

function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-3">
      <Rabbit className="size-40" />
      <h1>404</h1>
      <h2 className="text-center">
        I think you went down the wrong rabbit hole!
      </h2>
      <Link
        to="/"
        className="leading-7 [&:not(:first-child)]:mt-6 hover:text-chart-2"
      >
        Best to head home
      </Link>
    </div>
  )
}

export default NotFound

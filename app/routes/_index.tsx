import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Danilo Zeković' },
    {
      name: 'description',
      content:
        'Discover Danilo Zeković - Software Engineer. Explore my work, learn about my services, and get in touch.',
    },
  ]
}

export default function Index() {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      Home
    </div>
  )
}

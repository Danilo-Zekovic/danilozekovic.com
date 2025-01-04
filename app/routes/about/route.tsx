import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'About | Danilo Zeković' },
    {
      name: 'description',
      content:
        'A glimpse into my world. Learn about my expertise, my philosophy, and what makes me unique.',
    },
  ]
}

const About = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      About
    </div>
  )
}

export default About

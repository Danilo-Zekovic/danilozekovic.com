import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import profile from '~/images/profile_small.webp'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Danilo Zeković' },
      {
        name: 'description',
        content:
          'Discover Danilo Zeković - Software Engineer. Explore my work, learn about my services, and get in touch.',
      },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-6 md:px-12">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl">Hi, I&apos;m Danilo 👋</h1>
          <p className="mt-4 text-lg ">
            I&apos;m a Software Engineer passionate about building clean and
            modern web apps.
          </p>
          <div className="mt-6">
            <Button size="lg" className="px-6 py-3" asChild>
              <Link to="/about">Learn More About Me</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="ml-4 px-6 py-3"
              asChild
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full object-cover"
            style={{ objectPosition: 'center -50px' }}
          />
        </div>
      </section>
    </>
  )
}

export default Index

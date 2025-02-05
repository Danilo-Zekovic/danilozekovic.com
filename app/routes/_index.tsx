import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

import { Button } from '~/components/ui/button'

import profile from '~/images/profile.jpg'

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
    <>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-6 md:px-12">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl">Hi, I&apos;m Danilo 👋</h1>
          <p className="mt-4 text-lg ">
            I&apos;m a Software Engineer passionate about building clean and
            modern web apps.
          </p>
          <div className="mt-6">
            <Button size={'lg'} className="px-6 py-3" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
            <Button
              size={'lg'}
              variant={'outline'}
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
      {/* <div className="flex flex-wrap w-100 text-red-700">
        <div className="h-20 w-40 bg-background">background</div>
        <div className="h-20 w-40 bg-foreground">foreground</div>
        <div className="h-20 w-40 bg-card">card</div>
        <div className="h-20 w-40 bg-card-foreground">card-foreground</div>
        <div className="h-20 w-40 bg-popover">popover</div>
        <div className="h-20 w-40 bg-popover-foreground">
          popover-foreground
        </div>
        <div className="h-20 w-40 bg-primary">primary</div>
        <div className="h-20 w-40 bg-primary-foreground">
          primary-foreground
        </div>
        <div className="h-20 w-40 bg-secondary">secondary</div>
        <div className="h-20 w-40 bg-secondary-foreground">
          secondary-foreground
        </div>
        <div className="h-20 w-40 bg-muted">muted</div>
        <div className="h-20 w-40 bg-muted-foreground">muted-foreground</div>
        <div className="h-20 w-40 bg-accent">accent</div>
        <div className="h-20 w-40 bg-accent-foreground">accent-foreground</div>
        <div className="h-20 w-40 bg-destructive">destructive</div>
        <div className="h-20 w-40 bg-destructive-foreground">
          destructive-foreground
        </div>
        <div className="h-20 w-40 bg-border">border</div>
        <div className="h-20 w-40 bg-input">input</div>
        <div className="h-20 w-40 bg-ring">ring</div>
        <div className="h-20 w-40 bg-chart-1">chart-1</div>
        <div className="h-20 w-40 bg-chart-2">chart-2</div>
        <div className="h-20 w-40 bg-chart-3">chart-3</div>
        <div className="h-20 w-40 bg-chart-4">chart-4</div>
        <div className="h-20 w-40 bg-chart-5">chart-5</div>
        <div className="h-20 w-40 bg-sidebar-background">
          sidebar-background
        </div>
        <div className="h-20 w-40 bg-sidebar-foreground">
          sidebar-foreground
        </div>
        <div className="h-20 w-40 bg-sidebar-primary">sidebar-primary</div>
        <div className="h-20 w-40 bg-sidebar-primary-foreground">
          sidebar-primary-foreground
        </div>
        <div className="h-20 w-40 bg-sidebar-accent"></div>
        <div className="h-20 w-40 bg-sidebar-accent-foreground"></div>
        <div className="h-20 w-40 bg-sidebar-border">sidebar-border</div>
        <div className="h-20 w-40 bg-sidebar-ring">sidebar-ring</div>
      </div> */}
    </>
  )
}

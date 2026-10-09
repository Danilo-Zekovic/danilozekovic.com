import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'
import '../tailwind.css'
import NavigationBar from '@/components/NavigationBar'
import Footer from '@/components/Footer'
import { ThemeProvider, ThemeScript } from '~/lib/theme'
import { Rabbit } from 'lucide-react'

function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
      <Rabbit className="size-40" />
      <h1 className="text-4xl font-bold mt-4">404</h1>
      <h2 className="text-center text-xl mt-2">
        I think you went down the wrong rabbit hole! !
      </h2>
      <Link
        to="/"
        className="leading-7 mt-6 hover:text-chart-2 underline"
      >
        Best to head home
      </Link>
    </div>
  )
}

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <ThemeScript />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <NavigationBar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
})

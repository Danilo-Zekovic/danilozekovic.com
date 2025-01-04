import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Link, useLocation } from '@remix-run/react'
import ThemeToggle from '@/components/ThemeToggle'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center  px-4 py-3">
        <div className="flex items-center space-x-4 mr-auto">
          <Link to="/" className="text-xl font-bold text-primary">
            Danilo Zeković
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link to={item.href} prefetch="intent">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle({
                        active: pathname === item.href,
                      })}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col items-center space-y-4 mt-4">
                <NavigationMenu>
                  <NavigationMenuList className="flex-col justify-center">
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <SheetClose asChild>
                          <Link to={item.href}>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle({
                                active: pathname === item.href,
                              })}
                            >
                              {item.name}
                            </NavigationMenuLink>
                          </Link>
                        </SheetClose>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

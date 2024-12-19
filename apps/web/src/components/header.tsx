'use client'

import { Globe, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { useState } from 'react'
import { firaCode, firaCodeBold, navFont } from '@/assets/fonts'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About me', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between min-h-24">
          <div className="flex-shrink-0">
            <div className={`text-lg md:text-3xl ${firaCode.className}`}>
              Dmytro Oborskyi
            </div>
          </div>
          <div className="flex md:gap-6 items-center">
            {/* Desktop Nav */}
            <nav
              className={`md:flex hidden gap-7 text-lg ${navFont.className}`}
            >
              <Link
                href="#"
                className="hover:opacity-60 transition duration-200"
              >
                About Me
              </Link>
              <Link
                href="#"
                className="hover:opacity-60 transition duration-200"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="hover:opacity-60 transition duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="min-h-6 min-w-6" strokeWidth={1} />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="top" className="w-full px-0 pt-12 pb-0">
                  <SheetTitle
                    className={`absolute top-3.5 left-3 ${firaCodeBold.className} `}
                  >
                    Dmytro Oborskyi
                  </SheetTitle>
                  <nav className={`flex flex-col ${navFont.className}`}>
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg py-2 px-5 font-medium hover:bg-accent transition duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <Button
              variant="link"
              size="icon"
              className="hover:text-blue-700 transition duration-200"
            >
              <Globe className="min-h-5 min-w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

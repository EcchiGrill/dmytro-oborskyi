'use client'

import { Menu, TextCursor } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState } from 'react'
import { firaCode, firaCodeBold, roboto } from '@/assets/fonts'
import { useInterval } from 'react-use'
import { cn } from '@/lib/utils'
import UsFlag from '@/assets/icons/us.svg'
import UaFlag from '@/assets/icons/ua.svg'
import { Button } from '@/components/ui/button'
import IHeaderProps from './header.props'
import { useTranslations } from 'next-intl'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About me', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
]

function Header({ locale }: IHeaderProps) {
  const t = useTranslations('Header')
  const [isOpen, setIsOpen] = useState(false)
  const [isCursor, setCursor] = useState(true)

  useInterval(() => setCursor((prev) => !prev), 1000)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10 ">
      <div className="max-w-[110rem] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row py-4 gap-4 items-center md:justify-between min-h-24">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-lg md:text-3xl ${firaCode.className}`}
            >
              Dmytro Oborskyi
            </Link>
          </div>
          <div className="flex md:gap-8 items-center">
            {/* Desktop Nav */}
            <nav
              className={`md:flex hidden gap-7 text-lg ${roboto.className} whitespace-nowrap`}
            >
              <Link
                href="#about-me"
                className="hover:opacity-60 transition duration-200"
              >
                {t('about-me')}
              </Link>
              <Link
                href="#portfolio"
                className="hover:opacity-60 transition duration-200"
              >
                {t('portfolio')}
              </Link>
              <Link
                href="#"
                className="hover:opacity-60 transition duration-200"
              >
                {t('contact')}
              </Link>
            </nav>

            {/* Mobile Nav */}
            <div className="md:hidden pr-3">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="min-h-6 min-w-6" strokeWidth={1} />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="top" className="w-full px-0 pt-12 pb-0 ">
                  <SheetTitle
                    className={cn(
                      'absolute top-3.5 left-3 flex items-center',
                      firaCodeBold.className,
                    )}
                  >
                    Dmytro Oborskyi
                    {isCursor && <TextCursor className="-ml-1.5 opacity-60" />}
                  </SheetTitle>
                  <nav className={`flex flex-col py-2 ${roboto.className}`}>
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
            <div className="container flex border-l-2 border-l-gray-300 pl-6">
              <Link href="/en">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'flex gap-2 items-center px-10',
                    locale === 'en' && 'bg-accent text-accent-foreground',
                  )}
                >
                  <UsFlag width={15} height={15} />
                  EN
                </Button>
              </Link>
              <Link href="/uk">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'flex gap-2 items-center px-10',
                    locale === 'uk' && 'bg-accent text-accent-foreground',
                  )}
                >
                  <UaFlag width={15} height={15} />
                  UA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

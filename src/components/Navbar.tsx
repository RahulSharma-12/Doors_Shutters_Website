'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="relative w-13 h-12">
                  <Image
                    src="/JElogo.jpeg"
                    alt="Door & Shutter Services Logo"
                    width={80}
                    height={10}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight text-[#1e3a5f]">
                    Door & Shutter
                  </span>
                  <span className="text-xs font-medium text-[#d4a853]">
                    Services
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative',
                      pathname === link.href
                        ? 'text-[#1e3a5f] bg-[#d4a853]/20'
                        : 'text-gray-600 hover:text-[#1e3a5f]'
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#d4a853]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden lg:flex items-center gap-4"
            >
              <a
                href="tel:+447395532329"
                className="flex items-center gap-2 text-sm font-medium text-[#1e3a5f] hover:text-[#d4a853] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+44 7395 532329</span>
              </a>
              <Link href="/contact">
                <Button className="bg-[#d4a853] hover:bg-[#c49940] text-white font-medium px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1e3a5f] hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-2xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-left font-medium transition-colors',
                          pathname === link.href
                            ? 'bg-[#1e3a5f] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="tel:+447395532329"
                    className="flex items-center gap-2 text-[#1e3a5f] font-medium mb-4"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+44 7395 532329</span>
                  </a>
                  <Link href="/contact" onClick={closeMobileMenu}>
                    <Button className="w-full bg-[#d4a853] hover:bg-[#c49940] text-white font-medium py-3 rounded-full shadow-lg">
                      Get a Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

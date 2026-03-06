'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Loader2,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  'Automatic Doors',
  'Industrial Shutters',
  'Garage Doors',
  'Fire Doors',
  'Shop Fronts',
  'Glass Work',
  'Door Repairs',
  'Maintenance'
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubscribed(true)
    
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="bg-[#1e3a5f] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Door & Shutter Services Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-xl text-white block">Door & Shutter</span>
                  <span className="text-[#d4a853] text-sm font-medium">Services</span>
                </div>
              </Link>

              <p className="text-white/70 mb-6 leading-relaxed">
                Professional door and shutter installation, maintenance, and repair services. 
                Quality workmanship guaranteed.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+447395532329" 
                  className="flex items-center gap-3 text-white/80 hover:text-[#d4a853] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+44 7395 532329</span>
                </a>
                <a 
                  href="mailto:info@doorshutter.co.uk" 
                  className="flex items-center gap-3 text-white/80 hover:text-[#d4a853] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@doorshutter.co.uk</span>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>135 Drayton Gardens<br />West Drayton, UB7 7LH</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#d4a853] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-white/70 hover:text-[#d4a853] transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-white/70 mb-4">
                Subscribe to our newsletter for updates, tips, and exclusive offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#d4a853] focus:ring-[#d4a853]/20"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubscribed}
                  className="w-full h-12 bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold rounded-lg transition-all"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isSubscribed ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-white/70 text-sm mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d4a853] transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-white/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Door & Shutter Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#d4a853] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#d4a853] transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

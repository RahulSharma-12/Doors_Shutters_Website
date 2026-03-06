'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  DoorOpen, 
  Warehouse, 
  Car, 
  Flame, 
  Store,
  GlassWater,
  Wrench,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const featuredServices = [
  { icon: DoorOpen, title: 'Automatic Doors', description: 'Professional installation and maintenance' },
  { icon: Warehouse, title: 'Industrial Shutters', description: 'Heavy-duty security solutions' },
  { icon: Car, title: 'Garage Doors', description: 'Complete garage door solutions' },
  { icon: Flame, title: 'Fire Doors', description: 'Certified fire-rated doors' },
  { icon: Store, title: 'Shop Fronts', description: 'Attractive commercial entrances' },
  { icon: GlassWater, title: 'Glass Work', description: 'Professional glass installation' }
]

const benefits = [
  'Free no-obligation quotes',
  'Competitive pricing',
  'All work fully insured',
  '24/7 emergency service'
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 rounded-full px-4 py-2 mb-4"
            >
              <span className="text-[#1e3a5f] font-semibold text-sm">Our Services</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4"
            >
              What We <span className="text-[#d4a853]">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive door and shutter solutions for residential, commercial, and industrial properties.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-4 group-hover:bg-[#d4a853] transition-colors">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link href="/services">
              <Button className="bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
                Why Choose <span className="text-[#d4a853]">Us?</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 20 years of experience, we provide top-quality door and shutter services. 
                Our skilled professionals deliver exceptional workmanship on every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#d4a853]" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/about">
                <Button variant="outline" className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold px-8 py-6 rounded-full transition-all">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-[#d4a853] mb-2">20+</p>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
              <div className="bg-[#d4a853] rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">500+</p>
                <p className="text-white/80 text-sm">Happy Clients</p>
              </div>
              <div className="bg-[#d4a853] rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-white mb-2">5000+</p>
                <p className="text-white/80 text-sm">Projects Done</p>
              </div>
              <div className="bg-[#1e3a5f] rounded-2xl p-8 text-center">
                <p className="text-4xl font-bold text-[#d4a853] mb-2">24/7</p>
                <p className="text-white/80 text-sm">Emergency Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote. Our team is ready to help you with all your door and shutter needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 py-6 text-lg rounded-full"
              >
                <a href="tel:+447395532329">+44 7395 532329</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

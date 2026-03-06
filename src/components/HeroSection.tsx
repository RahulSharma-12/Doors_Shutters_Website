'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  { icon: Shield, text: 'Fully Insured' },
  { icon: Clock, text: '24/7 Emergency' },
  { icon: Award, text: '20+ Years Experience' }
]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#d4a853]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#d4a853] rounded-full animate-pulse" />
              <span className="text-[#1e3a5f] text-sm font-medium">
                Professional Door & Shutter Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight mb-6"
            >
              Quality{' '}
              <span className="text-[#d4a853]">Door & Shutter</span>{' '}
              Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-8"
            >
              Expert installation, maintenance, and repair services for automatic doors, 
              industrial shutters, garage doors, and more. Quality workmanship guaranteed.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#1e3a5f]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-bg.png"
                alt="Door and Shutter Services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#d4a853] flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1e3a5f]">20+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

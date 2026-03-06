'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CheckCircle, Users, Clock, Wrench, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 5000, suffix: '+', label: 'Projects Completed' },
  { value: 24, suffix: '/7', label: 'Emergency Support' }
]

const values = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We use only the highest quality materials and products, ensuring longevity and reliability.'
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Our team responds quickly to all enquiries, with emergency services available 24/7.'
  },
  {
    icon: Wrench,
    title: 'Expert Workmanship',
    description: 'Fully trained and certified technicians with years of hands-on experience.'
  }
]

const benefits = [
  'Free no-obligation quotes',
  'Competitive pricing',
  'All work fully insured',
  'Manufacturer approved',
  'Same day service available',
  'Satisfaction guaranteed'
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-[#1e3a5f]">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-[#d4a853]">Us</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Learn more about our company, values, and commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6">
                Why Choose Door & Shutter Services?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a family-run business dedicated to providing top-quality door and shutter 
                services. Our team of skilled professionals takes pride in delivering exceptional 
                workmanship on every project, whether it is a simple repair or a complete installation.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From commercial properties to industrial facilities, we have the expertise and 
                equipment to handle projects of any size. We work closely with our clients to 
                understand their specific needs and provide tailored solutions that meet their 
                requirements and budget.
              </p>

              {/* Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-[#d4a853] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Values Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center group-hover:bg-[#d4a853] transition-colors">
                          <value.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 lg:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <Users className="w-12 h-12 text-[#d4a853] mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Team of Experts
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our team consists of fully qualified and certified technicians who undergo 
                regular training to stay updated with the latest industry standards and technologies. 
                We are committed to providing professional, friendly, and efficient service on every job.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4a853]">15+</div>
                  <div className="text-white/70 text-sm">Certified Technicians</div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4a853]">100%</div>
                  <div className="text-white/70 text-sm">Customer Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#d4a853]">Nationwide</div>
                  <div className="text-white/70 text-sm">Service Coverage</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote and let us help you with your door and shutter needs.
            </p>
            <Link href="/contact">
              <Button className="bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

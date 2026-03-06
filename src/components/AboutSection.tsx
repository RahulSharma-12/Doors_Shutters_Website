'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { CheckCircle, Users, Award, Clock, Wrench, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
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
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-[#1e3a5f]">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1e3a5f]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#d4a853]/10 rounded-full px-4 py-2 mb-4"
          >
            <span className="text-[#d4a853] font-semibold text-sm">About Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6"
          >
            Your Trusted Partner for{' '}
            <span className="text-[#d4a853]">Door Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            With over 20 years of experience in the door and shutter industry, 
            we have built a reputation for excellence, reliability, and customer satisfaction.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
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
              services. Our team of skilled professionals takes pride 
              in delivering exceptional workmanship on every project, whether it is a simple 
              repair or a complete installation.
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
                        <h4 className="text-xl font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#1e3a5f]">
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

        {/* Team/Trust Section */}
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
  )
}

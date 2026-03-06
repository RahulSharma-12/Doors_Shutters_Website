'use client'

import { motion } from 'framer-motion'
import { 
  DoorOpen, 
  Warehouse, 
  Car, 
  Flame, 
  Store, 
  Layers,
  Wrench, 
  Settings, 
  PhoneCall,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: DoorOpen,
    title: 'Automatic Doors',
    description: 'Professional installation and maintenance of automatic sliding, swing, and revolving doors for commercial properties.',
    features: ['Sliding doors', 'Swing doors', 'Revolving doors', 'Sensor systems']
  },
  {
    icon: Warehouse,
    title: 'Industrial Shutters',
    description: 'Heavy-duty industrial shutters designed for warehouses, factories, and loading bays with maximum security.',
    features: ['Security shutters', 'Loading bay doors', 'Insulated shutters', 'High-speed doors']
  },
  {
    icon: Car,
    title: 'Garage Doors',
    description: 'Complete garage door solutions including roller doors, sectional doors, and automated systems.',
    features: ['Roller garage doors', 'Sectional doors', 'Up & over doors', 'Automation kits']
  },
  {
    icon: Flame,
    title: 'Fire Doors',
    description: 'Certified fire doors and fire-rated shutters to ensure compliance and safety for your premises.',
    features: ['Fire rated doors', 'Fire shutters', 'Emergency exits', 'Compliance certification']
  },
  {
    icon: Store,
    title: 'Shop Fronts',
    description: 'Attractive and secure shop front solutions including aluminium doors, shutters, and glass entrances.',
    features: ['Aluminium framing', 'Glass entrances', 'Security grilles', 'Signage integration']
  },
  {
    icon: Layers,
    title: 'Glass Work',
    description: 'Professional glass installation and repair services for commercial and residential properties.',
    features: ['Glass doors', 'Shop windows', 'Glass partitions', 'Emergency glazing']
  },
  {
    icon: Wrench,
    title: 'Door Repairs',
    description: 'Fast and reliable repair services for all types of doors, shutters, and access systems.',
    features: ['Emergency repairs', 'Same-day service', 'All brands supported', 'Parts replacement']
  },
  {
    icon: Settings,
    title: 'Maintenance Services',
    description: 'Regular maintenance packages to keep your doors and shutters operating smoothly and safely.',
    features: ['Planned maintenance', 'Safety inspections', 'Lubrication service', 'Compliance checks']
  },
  {
    icon: PhoneCall,
    title: 'Emergency Call-outs',
    description: '24/7 emergency response service for urgent door and shutter issues.',
    features: ['24/7 availability', 'Fast response', 'Nationwide coverage', 'Temporary solutions']
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1e3a5f]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a853]/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6"
          >
            Complete Door & Shutter{' '}
            <span className="text-[#d4a853]">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We offer a comprehensive range of door and shutter services to meet all your 
            residential, commercial, and industrial needs. All our work comes with full warranty.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] flex items-center justify-center mb-4 group-hover:from-[#d4a853] group-hover:to-[#c49940] transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#1e3a5f]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[#d4a853] font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Every project is unique. Contact us to discuss your specific requirements 
              and get a tailored solution that fits your needs and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold px-8 rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 rounded-full"
              >
                <a href="tel:+447395532329">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

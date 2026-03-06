'use client'

import { motion } from 'framer-motion'
import { 
  DoorOpen, 
  Warehouse, 
  Car, 
  Flame, 
  Store, 
  GlassWater,
  Wrench, 
  Settings, 
  PhoneCall,
  ArrowRight,
  CheckCircle
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
    icon: GlassWater,
    title: 'Glass Work',
    description: 'Professional glass installation and repair services for commercial and residential properties.',
    features: ['Glass panels', 'Glass doors', 'Shop front glazing', 'Glass partitions']
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

export default function ServicesPage() {
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
              Our <span className="text-[#d4a853]">Services</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive door and shutter solutions for residential, commercial, and industrial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="h-full bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] flex items-center justify-center mb-6 group-hover:from-[#d4a853] group-hover:to-[#c49940] transition-all duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#d4a853]" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <button className="inline-flex items-center gap-2 text-[#d4a853] font-semibold hover:gap-3 transition-all">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Button className="bg-[#d4a853] hover:bg-[#c49940] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                    Get Free Quote
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  asChild
                  className="border-white/30 text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 py-6 text-lg rounded-full"
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
    </main>
  )
}

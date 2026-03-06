'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Loader2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const serviceTypes = [
  'Automatic Doors',
  'Industrial Shutters',
  'Garage Doors',
  'Fire Doors',
  'Shop Fronts',
  'Glass Work',
  'Door Repairs',
  'Maintenance Services',
  'Emergency Call-out',
  'Other'
]

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+44 7395 532329'],
    action: 'tel:+447395532329'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['rahul1112sh@gmail.com'],
    action: 'mailto:rahul1112sh@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['135 Drayton Gardens', 'West Drayton, UB7 7LH'],
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 8am - 6pm', 'Sat: 9am - 2pm', 'Emergency: 24/7'],
    action: '#'
  }
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      
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
            <span className="text-[#d4a853] font-semibold text-sm">Contact Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6"
          >
            Get in Touch{' '}
            <span className="text-[#d4a853]">Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Ready to discuss your door and shutter needs? Contact us for a free, no-obligation quote. 
            We respond to all enquiries within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">Thank You!</h3>
                      <p className="text-gray-600 text-center">
                        Your message has been sent successfully. We will get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {error && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                          {error}
                        </div>
                      )}
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#1e3a5f] font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="h-12 rounded-lg border-gray-200 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#1e3a5f] font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="h-12 rounded-lg border-gray-200 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]/20"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#1e3a5f] font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+44 7XXX XXXXXX"
                            className="h-12 rounded-lg border-gray-200 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serviceType" className="text-[#1e3a5f] font-medium">
                            Service Required <span className="text-red-500">*</span>
                          </Label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full h-12 px-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
                          >
                            <option value="">Select a service...</option>
                            {serviceTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#1e3a5f] font-medium">
                          Your Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or requirements..."
                          rows={5}
                          required
                          className="rounded-lg border-gray-200 focus:border-[#1e3a5f] focus:ring-[#1e3a5f]/20 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-gray-50 to-white">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1e3a5f] mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <h4 className="font-semibold text-[#1e3a5f] mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white hover:bg-[#d4a853] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <div className="rounded-xl overflow-hidden bg-gray-100 h-48 border border-gray-200">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.4946%2C51.4954%2C-0.4546%2C51.5154&layer=mapnik&marker=51.5054%2C-0.4746"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2">135 Drayton Gardens, West Drayton, UB7 7LH</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

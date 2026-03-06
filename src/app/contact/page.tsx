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
    details: ['info@doorshutter.co.uk'],
    action: 'mailto:info@doorshutter.co.uk'
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

export default function ContactPage() {
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

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' })
        }, 5000)
      } else {
        setError(data.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setError('Failed to send message. Please try again.')
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
              Contact <span className="text-[#d4a853]">Us</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Get in touch with us for a free quote or any enquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send us a Message</h2>
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
                              placeholder="Your Name"
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
                              placeholder="your@email.com"
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
                              placeholder="Your Phone Number"
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

                        {error && (
                          <p className="text-red-500 text-sm">{error}</p>
                        )}

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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                animate={{ opacity: 1, y: 0 }}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4!2d-0.4746!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzE5LjQiTiAwwrAyOCc0OC42Ilc!5e0!3m2!1sen!2suk!4v1699999999999!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Door & Shutter Services Location"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              <MapPin className="w-4 h-4 inline-block mr-1" />
              135 Drayton Gardens, West Drayton, UB7 7LH
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

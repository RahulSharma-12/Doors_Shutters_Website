import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Log the contact form submission (in production, you would send an actual email)
    const emailContent = {
      to: 'rahul1112sh@gmail.com',
      subject: `New Contact Form Submission - ${serviceType}`,
      body: `
        New contact form submission from Door & Shutter Services website:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service Required: ${serviceType}
        
        Message:
        ${message}
        
        ---
        Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
      `
    }

    console.log('📧 Contact Form Submission:')
    console.log('To:', emailContent.to)
    console.log('Subject:', emailContent.subject)
    console.log('Body:', emailContent.body)

    // In a production environment, you would integrate with an email service like:
    // - SendGrid, Mailgun, AWS SES, Nodemailer, etc.
    // For now, we'll simulate a successful email send

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will contact you shortly.' 
      },
      { status: 200 }
    )

  } catch {
    console.error('Contact form error:')
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

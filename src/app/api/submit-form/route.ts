// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter (configure with your email service)
const createTransporter = () => {
//   return nodemailer.createTransporter({
  return nodemailer.createTransport({
    // For Gmail
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // your-email@gmail.com
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // your app password
    },
    // Alternative: For custom SMTP
    // host: process.env.SMTP_HOST,
    // port: parseInt(process.env.SMTP_PORT || '587'),
    // secure: false,
    // auth: {
    //   user: process.env.SMTP_USER,
    //   pass: process.env.SMTP_PASS,
    // },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.companyName || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0; color: #2563eb;">New Form Submission</h2>
              <p style="margin: 10px 0 0 0; color: #666;">Received on ${new Date(body.submittedAt).toLocaleString()}</p>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${body.name}</div>
            </div>
            
            <div class="field">
              <div class="label">Company Name:</div>
              <div class="value">${body.companyName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${body.email || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value">${body.phone}</div>
            </div>
            
            <div class="field">
              <div class="label">Employee Count:</div>
              <div class="value">${body.employeeCount}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${body.message || 'No message provided'}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Plain text version
    const textContent = `
        New Form Submission - ${new Date(body.submittedAt).toLocaleString()}

        Name: ${body.name}
        Company Name: ${body.companyName}
        Email: ${body.email || 'Not provided'}
        Phone Number: ${body.phone}
        Employee Count: ${body.employeeCount}
        Message: ${body.message || 'No message provided'}

        This email was sent from your website contact form.
    `

    // Configure email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_FROM || process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_TO, // Recipient email address
      subject: `New Form Submission - ${body.name} from ${body.companyName}`,
      text: textContent,
      html: htmlContent,
      replyTo: body.email || undefined,
    }

    // Send email
    const transporter = createTransporter()
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
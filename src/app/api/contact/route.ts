import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 1. Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please enter your name.' },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please provide a subject line.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    // 2. SMTP Integration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER || 'varshasrik2005@gmail.com';
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '');
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'varshasrik2005@gmail.com';

    // If SMTP credentials are provided in .env.local, send the email
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport(
        smtpHost.includes('gmail')
          ? {
              service: 'gmail',
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            }
          : {
              host: smtpHost,
              port: smtpPort,
              secure: smtpPort === 465,
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            }
      );

      const mailOptions = {
        from: `"${name} (Portfolio Inquiry)" <${smtpUser}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #7c3aed; margin-top: 0;">New Message from Portfolio Website</h2>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 20px;">
              Sent via Varshasri K's Personal Portfolio API route to ${receiverEmail}.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your message has been sent successfully via SMTP.',
        },
        { status: 200 }
      );
    } else {
      // Fallback Demo Mode: Log the message and confirm receipt
      console.log('--- [Portfolio Contact Inquiry Received] ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('--------------------------------------------');

      return NextResponse.json(
        {
          success: true,
          message:
            'Thank you for reaching out! Your message was received successfully. (Ready for SMTP delivery: Add your Google App Password to SMTP_PASS in .env.local to activate direct Gmail dispatch).',
          isDemoMode: true,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error('Contact API Error:', error);
    if (error?.code === 'EAUTH') {
      return NextResponse.json(
        {
          success: false,
          error:
            'Gmail authentication failed. Please ensure you have generated a 16-character Google App Password at https://myaccount.google.com/apppasswords and added it to SMTP_PASS in .env.local.',
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'An unexpected error occurred while sending your message. Please try again.',
      },
      { status: 500 }
    );
  }
}

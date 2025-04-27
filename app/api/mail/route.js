import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required data
    if (!data.email || !data.fullname) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Format the email content
    const emailContent = `
      New Form Submission:
      
      Full Name: ${data.fullname}
      Email: ${data.email}
      Phone: ${data.phonenumber || 'Not provided'}
      Submitted At: ${data.submittedAt || new Date().toISOString()}
    `;

    // Send mail
    await transporter.sendMail({
      from: data.email,
      to: process.env.SMTP_MAIL_SEND_USER,
      subject: `New Inquiry from ${data.fullname}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    return NextResponse.json(
      { message: 'Email notification sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    );
  }
}

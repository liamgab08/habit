import nodemailer from 'nodemailer'

if (!process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
  throw new Error('Please add your email credentials to .env.local')
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
})

export const welcomeEmailTemplate = (email: string) => ({
  from: `"Evolvia Team" <${process.env.EMAIL_SERVER_USER}>`,
  to: email,
  subject: "Welcome to Evolvia – Your Journey to Next-Level Growth Starts Now!",
  text: `Hi,

Welcome to Evolvia! We're thrilled to have you join our community dedicated to intelligent growth and effortless evolution.

At Evolvia, we believe in unlocking the next stage of your potential. Whether it's mastering new habits, streamlining your workflow, or achieving ambitious goals, we're building solutions designed to help you evolve with unprecedented ease.

Consider this your first step towards a smarter, more efficient future.

What to expect from Evolvia:
• Insights: Get exclusive access to cutting-edge strategies and principles.
• Innovations: Be the first to hear about our new tools and solutions (like the Aura Habits app!).
• Inspiration: Join a community focused on continuous progress and transformative results.

Ready to see where Evolvia can take you?
https://whop.com/@evolvia

Thank you for being part of our vision. We're excited to evolve with you.

Best regards,
The Evolvia Team`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #4B33E2;">Welcome to Evolvia!</h2>
      
      <p>Hi,</p>
      
      <p>We're thrilled to have you join our community dedicated to intelligent growth and effortless evolution.</p>
      
      <p>At Evolvia, we believe in unlocking the next stage of your potential. Whether it's mastering new habits, streamlining your workflow, or achieving ambitious goals, we're building solutions designed to help you evolve with unprecedented ease.</p>
      
      <p><strong>Consider this your first step towards a smarter, more efficient future.</strong></p>
      
      <h3 style="color: #4B33E2;">What to expect from Evolvia:</h3>
      <ul>
        <li><strong>Insights:</strong> Get exclusive access to cutting-edge strategies and principles.</li>
        <li><strong>Innovations:</strong> Be the first to hear about our new tools and solutions (like the Aura Habits app!).</li>
        <li><strong>Inspiration:</strong> Join a community focused on continuous progress and transformative results.</li>
      </ul>
      
      <p>Ready to see where Evolvia can take you?</p>
      
      <a href="https://whop.com/@evolvia" style="display: inline-block; background-color: #4B33E2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">Get Started Now</a>
      
      <p>Thank you for being part of our vision. We're excited to evolve with you.</p>
      
      <p>Best regards,<br>The Evolvia Team</p>
    </div>
  `,
}) 
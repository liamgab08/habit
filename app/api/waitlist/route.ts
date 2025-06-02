import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { waitlistSchema } from '@/lib/validations/waitlist'
import { transporter, welcomeEmailTemplate } from '@/lib/email'
import { z } from 'zod'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    
    // Validate and normalize email
    const result = waitlistSchema.safeParse(json)
    
    if (!result.success) {
      const errorMessage = result.error.issues
        .map((issue) => issue.message)
        .join(", ")
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      )
    }

    const { email } = result.data

    const client = await clientPromise
    const db = client.db('aurahabits')
    const waitlistCollection = db.collection('waitlist')

    // Check if email already exists
    const existingEmail = await waitlistCollection.findOne({ email })
    if (existingEmail) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 400 }
      )
    }

    // Add new email to waitlist
    await waitlistCollection.insertOne({
      email,
      signupDate: new Date(),
      normalizedEmail: email, // Since it's already normalized by Zod
    })

    // Send welcome email
    try {
      await transporter.sendMail(welcomeEmailTemplate(email))
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't return error to client, as the signup was successful
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist! Check your email for confirmation.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again later.' },
      { status: 500 }
    )
  }
} 
import { sql } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await sql`
      INSERT INTO leads (name, email, company, message)
      VALUES (${name}, ${email}, ${company}, ${message})
    `;

    return NextResponse.json({ message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Failed to capture lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

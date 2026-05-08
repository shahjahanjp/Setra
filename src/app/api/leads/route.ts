import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const sql = neon(process.env.DATABASE_URL!);

    // Using tagged template literal for safety and correct typing
    await sql`
      INSERT INTO leads (name, email, hospital, specialty, volume, message)
      VALUES (${data.name}, ${data.email}, ${data.hospital}, ${data.specialty}, ${data.volume}, ${data.message})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}

// app/api/users/[id]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
     const { searchParams } = new URL(request.url);

      const name=searchParams.get("name");

    return NextResponse.json({ name: name });
}
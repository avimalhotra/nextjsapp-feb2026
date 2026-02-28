// app/api/brands/[id]/route.js
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

    const { id } = await params;
    console.log(id);
    return NextResponse.json({ message: `Brand with ID ${id} retrieved successfully` });

   
}
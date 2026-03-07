import { NextResponse, NextRequest } from "next/server";

export async function POST(request){

     try {
          const body = await request.json();
          const { name, email } = body;

          const newUser = {message:"post data", id: Date.now(), name, email };

          return NextResponse.json(newUser, { status: 201 });
     }

     catch (error) {
          return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
     }

}
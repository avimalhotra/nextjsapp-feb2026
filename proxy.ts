import { NextRequest, NextResponse } from "next/server";

export function proxy(req:NextRequest){
     console.log(`Blog visited at ${new Date().toLocaleString()} at page ${req.url}`);
     
     // if(!req.cookies.get("token")){
     //      return NextResponse.redirect(new URL("/error", req.url))
     // }
     
     return NextResponse.next();
}

export const config={
     "matcher":["/blog/:path*"]
}
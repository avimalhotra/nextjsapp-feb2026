// import { NextResponse } from "next/server";

export async function POST(request:Request){

     try{
          const res= await request.json();
          
          return Response.json({message:"User info updated", body:res},{status:200});
     }
     catch(err){
          return Response.json({error:`Error found - ${err}`},{status:404});
     }

}
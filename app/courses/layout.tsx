import type { Metadata } from "next";

export const metadata:Metadata={
     title:"Our Course",
     description:"Here are our top courses offered"
};

export default function Courses(
     {children}: {children:React.ReactNode}
){
     return (
          <>
          {children}
          </>
     ) 
}
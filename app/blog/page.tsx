import Header from "../header";
import Nav from "../nav";
import Footer from "../footer";
import type { Metadata } from "next";

export const metadata:Metadata={
     title:"Our Blogs",
     description:"Here are our blogs wirtten by author"
};

export default function Blog(){
     return (
          <div className="container mx-auto p-3">
               <Header title="Blogs" />
               <Nav />
               <main className="p-3">
                    <h2 className="text-3xl font-bold">Blog Page</h2>
                    <p>These are our blogs</p>  
               </main>
               <Footer />
          </div>
     )
}
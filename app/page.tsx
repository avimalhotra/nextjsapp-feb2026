import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";
import Client from "./client";
import TestAPI from "./testapi";
// import ContactForm from "./contactform";
import { Suspense } from "react";

export default function Home(){
  
  // console.log(process.version);
  // console.log(process.env.API_KEY);
  // console.log(process.env.TOKEN);
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
      <div className="container mx-auto p-3">
           <Header title="Tech Altum" />
           <Nav />
           <main className="p-3">
              <h2 className="text-3xl font-bold">Welcome to our Website</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam id quas magni ad minus recusandae aliquid. Earum dolorum, in rerum, adipisci vero ut eius esse, cum odit eaque unde.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam id quas magni ad minus recusandae aliquid. Earum dolorum, in rerum, adipisci vero ut eius esse, cum odit eaque unde.</p>
              
              <hr />

              {/* <Suspense fallback={<h2 className="text-3xl">Loading.....</h2>}>
                <TestAPI></TestAPI>
              </Suspense>
               */}


           </main>
           <Footer />
      </div>
  );
}
import Header from "../header";
import Nav from "../nav";
import Footer from "../footer";
import { Metadata } from "next";


export const metadata:Metadata={
     title:"Our Traines",
     description:"Here are our expertise faculties"
};

export default function Trainers() {
  return (
    <div className="container mx-auto p-3">
      <Header title="Trainers" />
      <Nav />
      <main className="p-3">
        <h2 className="text-3xl font-bold">Our Trainers</h2>
        <p>These are our trainers</p>
      </main>
      <Footer />
    </div>
  );
}

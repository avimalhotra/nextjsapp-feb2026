import Header from "../header";
import Nav from "../nav";
import Footer from "../footer";
import Link from "next/link";

export default function Courses() {
  const course: string = "Courses";

  return (
    <div className="container mx-auto p-3">
      <Header title={course} />
      <Nav />
      <main className="p-3">
        <h2 className="text-3xl font-bold">{course} Course</h2>
     
        <p>{ course }  Information</p>

           <ul>
               <li><Link href="/courses/react">React</Link></li>
               <li><Link href="">Angular</Link></li>
           </ul>

      </main>
      <Footer />
    </div>
  );
}
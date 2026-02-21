import Link from "next/link"

export default function Nav(){
     return (
          <nav className="p-3">
               <ul className="list-none flex gap-3">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/courses">Courses</Link></li>
                    <li><Link href="/trainers">Trainers</Link></li>
               </ul>
          </nav>
     )
}
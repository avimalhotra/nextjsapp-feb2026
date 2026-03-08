"use client"

export default function ClientForm({action}){

     return (
          
          <section className="my-3">
          <h3 className="text-3xl">Server Actions</h3>
          <form action={action}>
               <label className="mx-3">Name: <input type="text" className="border py-2 px-4 rounded" name="name" required /></label>
               <label className="mx-3">Age: <input type="number" className="border py-2 px-4 rounded" name="age" required /></label>
               <button type="submit" className="border py-2 px-4 rounded">Send</button>
          </form>
          
          </section>
     )
}
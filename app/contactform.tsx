import { redirect } from "next/navigation";
import ClientForm from "./ClientForm";

export default function ContactForm(){

     async function submitForm(formData:FormData){
          "use server"

          const name=formData.get("name");
          const age=formData.get("age");

          console.log(name, age);

          redirect("/send");

     }

     return (
         <ClientForm action={submitForm} />
     )

     // return (
     //      <section className="my-3">
     //      <h3 className="text-3xl">Server Actions</h3>
     //      <form action={submitForm}>
     //           <label className="mx-3">Name: <input type="text" className="border py-2 px-4 rounded" name="name" required /></label>
     //           <label className="mx-3">Age: <input type="number" className="border py-2 px-4 rounded" name="age" required /></label>
     //           <button type="submit" className="border py-2 px-4 rounded">Send</button>
     //      </form>
     //      </section>
     // )
}
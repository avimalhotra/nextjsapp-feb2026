'use client';
import { useState,useEffect } from 'react';

export default function Client(){
  
  // const [name, setName] = useState("");
  const [form, setForm]=useState({ name:'', email:''});
  const [error, setError] = useState("")

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit=async (e:React.FormEvent)=>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name");
    const email = formData.get("email");


    if (name.length<3) {

      setError("Invalid name")

      return
    }
    else if (!email.includes("@")) {

      setError("Invalid email")

      return
    }

    setError("")

    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name:name, email:email }),
    }).then(i=>i.json()).then(i=>setError("submitted"))
    
  }
  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log(name);
  // }


    return (
      <form onSubmit={handleSubmit} noValidate>
          <label>Name: <input type="text" name='name' className='border px-4 py-2 mx-2 rounded' required pattern='[a-zA-Z]{1}[a-zA-Z .]{2,}' onChange={handleChange} /></label>
          <label>Email: <input type="email" name='email' className='border px-4 py-2 mx-2 rounded' onChange={handleChange} required /></label>
          <button className='border px-4 py-2 rounded'>Send</button>
          {error}
      </form>
    )
}

// export default function Client(){
 
//   const [count, setCount] = useState(0);
//   const [cars,setCars]=useState([]);

//   useEffect(() => {
//     async function fetchCars() {
//       const res = await fetch('/api/cars');
//       const data = await res.json(); 
//       setCars(data);
//     }
//     fetchCars()
//   }, []);

//   useEffect(()=>{

//       fetch("/api/users",{method:"POST",body:JSON.stringify({name:"lorem",id:22})}).then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e));

//   },[])


//   return (
//     <div className="my-3 border p-3 rounded">
//       <h3 className='text-2xl'>This is a Client Component</h3>
//       <h4 className='text-2xl'>State</h4>
//       <button className='border-2 px-4 py-2 rounded' onClick={() => setCount(count + 1)}>Increment</button>
//       <span className='mx-3'>Count: {count}</span>
//       <hr className='border my-2 border-amber-600' />
//       <h4 className='text-2xl'>API Call</h4>
      
//       <table className='border-collapse border border-gray-300'>
//         <thead>
//           <tr>
//             <th className='border border-gray-300 px-4 py-2'>Name</th>
//             <th className='border border-gray-300 px-4 py-2'>Type</th>
//             <th className='border border-gray-300 px-4 py-2'>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cars.map((car, index) => (
//             <tr key={index}>
//               <td className='border border-gray-300 px-4 py-2'>{car.name}</td>
//               <td className='border border-gray-300 px-4 py-2'>{car.type}</td>
//               <td className='border border-gray-300 px-4 py-2'>{car.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>


//     </div>
//   );

// }
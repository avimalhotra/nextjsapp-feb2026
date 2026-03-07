export default async function TestAPI(){
     
     // const res=await fetch('https://jsonplaceholder.typicode.com/users/');
     // const res=await fetch("/api/cars");
     const res=await fetch("http://localhost:3000/api/cars",{cache:"no-store"});

     const cars=await res.json();

     return  (
          <section className="my-3">
               <h3 className="text-2xl">Cars APi</h3>
               <table className="w-full border text-amber-500">
                    <thead>
                         <tr>
                              <th className="border text-white p-2">Name</th>
                              <th className="border text-white p-2">Type</th>
                              <th className="border text-white p-2">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              cars.map(elem=>(
                                   <tr key={elem.name}>
                                        <td className="border text-blue-300 p-2">{elem.name}</td>
                                        <td className="border text-blue-300 p-2">{elem.type}</td>
                                        <td className="border text-blue-300 p-2">{elem.price}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </section>
     )

}
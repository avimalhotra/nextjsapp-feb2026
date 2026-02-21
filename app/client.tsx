'use client';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Client(){
 
  const [count, setCount] = useState(0);
  const [cars,setCars]=useState([]);

  useEffect(() => {
    async function fetchCars() {
      const res = await fetch('/api/cars');
      const data = await res.json(); 
      setCars(data);
    }
    fetchCars()
  }, []);


  return (
    <div className="my-3 border p-3 rounded">
      <h3 className='text-2xl'>This is a Client Component</h3>
      <h4 className='text-2xl'>State</h4>
      <button className='border-2 px-4 py-2 rounded' onClick={() => setCount(count + 1)}>Increment</button>
      <span className='mx-3'>Count: {count}</span>
      <hr className='border my-2 border-amber-600' />
      <h4 className='text-2xl'>API Call</h4>
      
      <table className='border-collapse border border-gray-300'>
        <thead>
          <tr>
            <th className='border border-gray-300 px-4 py-2'>Name</th>
            <th className='border border-gray-300 px-4 py-2'>Type</th>
            <th className='border border-gray-300 px-4 py-2'>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td className='border border-gray-300 px-4 py-2'>{car.name}</td>
              <td className='border border-gray-300 px-4 py-2'>{car.type}</td>
              <td className='border border-gray-300 px-4 py-2'>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );

}
import Courses from "./courses/page";
import Trainers from "./trainers/page";
// import Blog from "./blog/[slug]/page";

export default function Home() {
  return (
      <div className="container mx-auto p-3">
            <h1 className="text-4xl font-bold">Hello Next JS </h1>
            <p className="my-3">Welcome to our world</p>
            <p className="my-3">Today is :{new Date().toLocaleString()}</p>
            
            <Courses></Courses>
          
            <Trainers></Trainers>
      </div>
  );
}
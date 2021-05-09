import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "mywebssite", body: "lorem", author: "mario", id: 1 },
    { title: "mywebdev", body: "korem", author: "mgario", id: 2 },
    { title: "mywebdev", body: "ioorem", author: "ougario", id: 3 },
  ]);

  return (
    <div className="home">
    <BlogList blogs={blogs}></BlogList>
    </div>
  );
};
export default Home;

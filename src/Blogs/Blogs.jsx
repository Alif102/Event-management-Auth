import { useLoaderData } from "react-router-dom"
import BlogsData from "./BlogsData";

const Blogs = () => {
    const blogData = useLoaderData();
  return (
    <div>
        <BlogsData blogData ={blogData}></BlogsData>
    </div>
  )
}

export default Blogs
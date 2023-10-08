/* eslint-disable react/prop-types */
import { SingleBlog } from "./SingleBlog"

const BlogsData = ({blogData}) => {
  return (
    <div>
        <div className="grid max-w-[1000px] mx-auto grid-cols-1 mt-10 rounded-md mb-12 gap-4">
         {

         
         blogData.map(blog => <SingleBlog key={blog.id} blog={blog} ></SingleBlog>)
}
    </div>

    </div>
  )
}

export default BlogsData
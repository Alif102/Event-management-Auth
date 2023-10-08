/* eslint-disable react/prop-types */

export const SingleBlog = ({blog}) => {
    const {image, title, person, date, desc} = blog;
  return (
    <div>
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className="w-[400px] rounded-md" src={image} alt="BlogImg" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <h2 className="text-xl text-gray-400">By {person}</h2>
    </h2>
    <p>{desc}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{date}</div> 
      <div className="badge badge-outline">Read More ....</div>
    </div>
  </div>
</div>
    </div>
  )
}

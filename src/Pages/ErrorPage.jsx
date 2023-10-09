import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='mt-14 text-center'>
        <h2 className='text-3xl text-red-800 '>ErrorPage</h2>
      <Link>  <button className='btn btn-secondary rounded-md'>Go Home</button></Link>
    </div>
  )
}

export default ErrorPage
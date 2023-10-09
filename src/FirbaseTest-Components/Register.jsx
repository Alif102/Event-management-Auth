import { Link } from "react-router-dom";
import UseAuth from "./Hooks/UseAuth";
import SocialLogin from "./SocialLogin"
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [sucess, setSuccess] =useState('');

  const {createUser} = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = (form.get('name'));
    const email = (form.get('email'));
    const photo = (form.get('photo'));
    const password = (form.get('password'))
    console.log(name, email, photo, password)

    
// rester error
    setRegisterError('');
    setSuccess('');

    // validation
    if (password.length < 6) {
      setRegisterError("toast.error('six char')")
      return;
      
    }
    else if(!/[A-Z/0-9]/.test(password)){
      setRegisterError('should have one upper case letter')
      return;
    }
    
    

    

    createUser(email,password)
  
    .then(res => {
      console.log(res.user);
      setSuccess('User Created Sucessfully')
    })
    .catch(error => {
      console.error(error);
      setRegisterError(error.message)
    })


  }
  return (
    <>
      
  
    
    <div >
      <h1 className="text-2xl text-center ">Please Register </h1>
      <form onSubmit={handleRegister}
       className="card-body md:w-3/4 lg:w-1/2 mx-auto ">

<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
        </div>


        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account ? <Link to='/login'> <button>Login</button></Link></p>

            <SocialLogin/>

      </form>
      {
        registerError && <p className="text-red-700">{registerError}</p>
      }
      {
        // sucess && <p className="text-green-600"> {sucess}</p>
        sucess && toast({sucess})
      }
    </div>
 
    </>
  )
}

export default Register
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const SocialLogin = () => {

    const { googleProvider} = useContext(AuthContext)

    const handleLogin = (media)=>{
        media()
        .then(res => console.log(res))
        .catch(error => console.log(error))

    }


  return (
    <div>
        <div className=" divider">Continue With</div>
        <div>
            <button 
            onClick={()=> handleLogin(googleProvider)}
            className="btn btn-accent">Google</button>
        </div>
    </div>
  )
}

export default SocialLogin
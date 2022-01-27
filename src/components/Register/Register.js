import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
const Register = () => {
    const {registerUser,user,authError,isLoading,signInWithGoogle}=useAuth()
    const history=useNavigate()
    const location=useLocation()

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
         registerUser(data.email, data.password,data.name,history,location);
        console.log(data.name);
    };
    const handleGoogle=()=>{
        signInWithGoogle(history,location)

    }


    return (
        <div>
            <div className="relative font-medium md:h-screen flex items-center content-center">
  <div className="mr-auto ml-auto w-full">
    <div className="w-full max-w-md mr-auto ml-auto mt-4 mb-1 text-left">
      <h1 className="text-gray-800 block text-3xl font-extrabold font-title">Register</h1>
    </div>


    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mr-auto ml-auto mt-4">
      <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto">




        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Your Name </label>
          <input className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300" {...register("name")} id="username" type="text" placeholder="Your Name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username"> Email address </label>
          <input className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300" {...register("email")} id="email" type="text" placeholder="Your Email"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2 text-left" htmlFor="username">Your Password </label>
          <input className="shadow-sm appearance-none border border-gray-400 rounded w-full py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:border-indigo-300" {...register("password")} id="password" type="password" placeholder="Your Password"/>
        </div>
        








        <div className="mb-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="text-center sm:text-left">
              <label>
                <input type="checkbox" className="mr-2"/>
                <span className="text-sm font-medium text-gray-700 ">Remember me</span>
              </label>
            </div>
           
          </div>
        </div>
        <div className="mb-6">
          
          <input className="bg-indigo-500 hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all" type="submit" />
        </div>
        <div className="mb-6">
        {isLoading && 
        <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
        </div>
      </div>
        
        
        }
               {user?.email && 
               
               <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  <p className="font-bold">check your email</p>
  <p className="text-sm">Your Registration Ss Successfully</p>
</div>
               
                }
               {authError && 
               
               <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p className="font-bold">{authError}</p>
 
</div>
               
               
             
               
               
               
               }
        <NavLink 
               style={{textDecoration:'none'}}
               to='/Login'
               ><button variant="text">Already Registered? please Login</button></NavLink>
        </div>
        <div className="grid sm:grid-cols-3 gap-0 mb-6">
      


                <button onClick={handleGoogle} type="button" className="relative border-solid border shadow-sm border-gray-400
                        font-semibold text-gray-600 text-sm py-1 text-center rounded text-center w-full
                        focus:outline-none hover:border-indigo-600 transition-all duration-200">
            <i className="fab fa-google text-lg"></i>
          </button>
        </div>
        
      </div>
   
   
   
   
    </form>

    
  </div>
</div>
        </div>
    );
};

export default Register;